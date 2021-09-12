import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let slidesLength = this.slides.length;
    this.name;
    this.price;
    this.image;
    this.id;
    
    for (let i = 0; i < this.slides.length; i++) {
      this.name = this.slides[i].name;
      this.price = this.slides[i].price;
      this.image = this.slides[i].image;
      this.id = this.slides[i].id;
    }
    
    let carouselArrows = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;
    
    let carouselCard = `
      <div class="carousel__slide" data-id="penang-shrimp">
          <img src="/assets/images/carousel/${this.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.price.toFixed(2)}</span>
          <div class="carousel__title">${this.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
    
    let carouselRoot = createElement(`
      <div class="container">
          <div class="carousel">
            ${carouselArrows}
            <div class="carousel__inner">
              ${carouselCard}
            </div>
          </div>
      </div>  
    `);
    
    this.elem = carouselRoot;
    const leftArrow = this.elem.querySelector('.carousel__arrow_left');
    leftArrow.style.display = 'none';
  }
  
  slideImage() {
    const rightArrow = this.elem.querySelector('.carousel__arrow_right');
    const leftArrow = this.elem.querySelector('.carousel__arrow_left');
    let carousel = this.elem.querySelector('.carousel__inner');
    const image = this.elem.querySelector('.carousel__img');
    const width = image.width; // так стало выводить правильную цифру
        
    let counter = 0;
        
    leftArrow.style.display = 'none';
    rightArrow.style.display = '';
    
    
    rightArrow.addEventListener('click', () => {
      counter++;
      this.elem.style.transform = `translateX(${-counter * width}px)`;
      if (counter === this.slides.length) {
        rightArrow.style.display = 'none';
        leftArrow.style.display = '';
      } else {
        rightArrow.style.display = '';
        leftArrow.style.display = '';
      }
      console.log('did happen');
    });
    
    leftArrow.addEventListener('click', () => {
      counter--;
      this.elem.style.transform = `translateX(${-counter * width}px)`;
      if (counter === 0) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = '';
      } else {
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      }
    })
    
    return;
  }
  

  addToCart() {
    let plusButton = this.elem.querySelector('.carousel__button');
    
    plusButton.addEventListener('click', () => {
      console.log('plus');
      new CustomEvent("product-add", {
        detail: this.id,
        bubbles: true
      });
      
      console.log('plus');
    });
    
    return;
  }
  
}



let test = new Carousel([
  {
    name: 'Penang shrimp',
    price: 16,
    image: 'penang_shrimp.png',
    id: 'penang-shrimp'
  },
  {
    name: 'Chicken cashew',
    price: 14,
    image: 'chicken_cashew.png',
    id: 'chicken-cashew'
  },
  {
    name: 'Red curry veggies',
    price: 12.5,
    image: 'red_curry_vega.png',
    id: 'red-curry-veggies'
  },
  {
    name: 'Chicken springrolls',
    price: 6.5,
    image: 'chicken_loempias.png',
    id: 'chicken-springrolls'
  }
]);
test.addToCart();
test.slideImage();
