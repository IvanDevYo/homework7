import { LitElement, html, css } from 'lit-element'

export default class MyLeaf extends LitElement {
    connectedCallback() {
        super.connectedCallback()

        console.log('connected')
        console.log(this.item)
        this.isItemsExist = !!this.item.items && !!this.item.items.length
    }

    static get styles() {
        return css`
          .leaf-text {
            color: blue;
            text-align: center;
            width: 100px;
            padding: 10px 0;
            background-color: greenyellow;
            border: 1px solid #000;
            margin-top: 10px;
          }
          .tree-container {display:flex; border: 1px solid #000; padding: 50px}
        `;
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

    // shouldUpdate(changedProperties) {
    //     changedProperties.forEach((oldValue, propName) => {
    //         console.log(`${propName} changed. oldValue: ${oldValue}`);
    //     });
    //     return changedProperties.has('item');
    // }

    render() {
        return html`
            <div class="leaf-container">
                <div class="leaf-text">${this.item.id}</div>
                ${this.isItemsExist ? 
                    html`<div class="tree-container">
                        <my-tree item="${JSON.stringify(this.item)}"></my-tree>
                    </div>` : html``
                }
            </div>
        `
    }
}