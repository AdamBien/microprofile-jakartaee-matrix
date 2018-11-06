# microprofile-runtime-support


|Server|Java EE version|MicroProfile version|
|------|---------------|--------------------|
|[Payara 5.183](https://www.payara.fish)|8|2.0|
|[TomEE 8.0](http://tomee.apache.org)|8|2.0|
|[OpenLiberty 18.0.0.3](https://openliberty.io)|8|2.0|
|[WildFly 14.01](http://wildfly.org)|8|Config, OpenTracing, Health|


# About

The markdown and HTML markup was generated with two custom elements / WebComponents from servers.json without any external dependencies #usetheplatform. Checkout: [webcomponents.training](http://webcomponents.training) or [airhacks.io](http://airhacks.io/)


# Generate

Install [browsersync](https://www.browsersync.io)

```
git clone https://github.com/AdamBien/microprofile-jakartaee-matrix
cd servers
browser-sync src -f src -b "google chrome" --no-notify
```



