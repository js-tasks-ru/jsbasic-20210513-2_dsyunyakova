import createElement from '../../assets/lib/create-element.js';

let x = {
  name: "Laab kai chicken salad", // название товара
  price: 10, // цена товара
  category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
  image: "laab_kai_chicken_salad.png", // название картинки товара
  id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
}

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.image = product.image;
    this.id = product.id;
    
    let div = document.createElement('div');
    div.classList.add('card');
    div.insertAdjacentHTML('afterbegin', `<div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>`);
    
    this.elem = document.querySelector('.card');
  }
  
}