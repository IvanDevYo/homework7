import { LitElement, html, property } from 'lit-element'

export default class MyTree extends LitElement {

    connectedCallback() {
        super.connectedCallback()

        console.log('connected')
        console.log(this.item)
        if (this.item.items) {
            this.items = this.item.items
        } else {
            this.items = []
        }
    }

    static get properties() {
        return {
            item: {type: Object}
        };
    }

    constructor() {
        super();
        this.item = {}
    }

    render() {
        return html`
            ${this.items.map(item => html`<my-leaf item="${JSON.stringify(item)}"></my-leaf>`)}
        `
    }

}