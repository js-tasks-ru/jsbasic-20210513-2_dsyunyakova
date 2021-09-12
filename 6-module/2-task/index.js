import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.image = product.image;
    this.id = product.id;
    let div = document.createElement('div');
    div.classList.add('card');
    
    
    const card = createElement(`
    <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `);
    this.elem = card;

    /*div.insertAdjacentHTML('afterbegin', `<div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>`);
    */
   
    
  }
}

let binButton = document.querySelector('.card__button');

binButton.addEventListener('click', () => {
  new CustomEvent("product-add", {
    detail: this.product.id,
    bubbles: true
  })
});