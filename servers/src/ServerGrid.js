export default class ServerGrid extends HTMLElement { 

    constructor() { 
        super();
    }

    connectedCallback() { 
        const table = document.createElement("table");
        this.appendChild(table);
        table.appendChild(this.header());
        this.loadMatrix(table);
    }

    header() { 
        const tr = document.createElement("tr");
        tr.innerHTML = `<th>Server</th><th>Java EE version</th><th>MicroProfile version</th>`;
        return tr;

    }    

    async loadMatrix(table) { 
        const response = await fetch('servers.json');
        const json = await response.json();
        json.map(s => this.row(s)).
            map(c => this.tr(c)).
            forEach(s => table.appendChild(s));
    }    

    row({ name, uri, javaee, microprofile }) { 
       return `<tr><td><a href="${uri}">${name}</a></td><td>${javaee}</td><td>${microprofile}</td></tr>`;
    } 
    
    tr(content) { 
        const tr = document.createElement("tr");
        tr.innerHTML = content;
        return tr;
    }



}

customElements.define("server-grid", ServerGrid);



