export default class MDGrid extends HTMLElement { 

    constructor() { 
        super();
        this.root = this.attachShadow({ 'mode': 'open' });
    }

    connectedCallback() { 
        this.root.innerHTML = `
            <style>
            textarea{
                width: 50em;
                height: 20em;
            }            
            </style>
            <section>
                <textarea placeholder="md" class="output"></textarea>
                <button>copy md</button>
            </section>
        `;
        this.outputArea = this.root.querySelector("textarea");
        this.outputArea.contentEditable = true;
        this.root.querySelector("button").onclick = _ => this.copyIntoClipboard(this.outputArea);
        this.loadMatrix(this.outputArea);

    }

    copyIntoClipboard(element) { 
        element.select();
        document.execCommand("copy");
    }

    async loadMatrix() { 
        const header = 
        "|Server|Java EE version|MicroProfile version|\n|------|---------------|--------------------|";


        const response = await fetch('servers.json');
        const json = await response.json();
        const tableBody = json.
            map(s => this.row(s)).
            join('\n');
        this.outputArea.value = `${header}
        ${tableBody}`;
        
    }    

    row({ name, uri, javaee, microprofile }) { 
        return `|[${name}](${uri})|${javaee}|${microprofile}|`;
    } 
 
}

customElements.define("md-grid", MDGrid);



