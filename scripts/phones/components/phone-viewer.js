import Component from '../../component.js';


export default class PhoneViewer extends Component {
  constructor({element, onBack}){
    super({element});
    this._element = element;
    this._onBack = onBack;


    this._element.addEventListener('click', event => {
        const targetDelegate = event.target.closest('[data-component ="back-button"]');
        if(!targetDelegate){
            return;
        }
        this._onBack();
    })

    this._element.addEventListener('click', event => {
        const targetDelegate = event.target.closest('[data-component ="small-image"]');
        if(!targetDelegate){
            return;
        }
        this._currentImage = targetDelegate.src;
        this._render();
    })

      this._element.addEventListener('click', event => {
          const targetDelegate = event.target.closest('[data-component = "add-button"]');
          if(!targetDelegate){
              return;
          }
          this._cart.add(this._phone.id);
      })

  }


  show(phone) {
    this._phone = phone;
    this._currentImage = this._phone.images[0];


    this._render();

    super.show();




  }

  _addImageListener() {


  }

  _render() {
      this._element.innerHTML = `
      <img class="phone" src="${ this._currentImage }">
  
      <button data-component = "back-button">Back</button>
      <button data-component = "add-button">Add to basket</button>
  
      <h1>${ this._phone.id }</h1>
  
      <p>${ this._phone.description }</p>
  
      <ul class="phone-thumbs">
      ${this._phone.images.map((source) => 
        `
        <li>
          <img data-component ="small-image" src="${ source }">
        </li>
        `
    ).join("")}
 
      </ul>
    `;

      this._addImageListener();
  }
}
