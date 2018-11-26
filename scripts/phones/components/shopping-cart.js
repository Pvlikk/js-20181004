import Component from '../../component.js';

export default class ShoppingCart extends Component{
    constructor({element}){
        super({element});
        this._phones = {};
        this._render();


        _add: (phoneId) => {
            if(this._phones[phoneId]===undefined){
                this._phones[phoneId] = 0;
            }
            this._phones[phoneId]++;
            this._render();
        }

        _remove: (phoneId) => {
            this._phones[phoneId]--;
            if(this._phones[phoneId] === 0) {
                delete this._phones[phoneId]
            }
            this._render();
        }
    }





    _render(){
        this._element.innerHTML = `
           <p>Shopping Cart</p>
            <ul>
             ${ Object.entries(this._phones).map(([id, quantity])=> {
              `   <li data-element = "item" data-item-id="${id}">
                    ${id} (${quantity})
                    <button data-element="remove-button">X</button>
                  </li>

              `
         
        }).join("")}
            </ul>
        `
    }
}