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
        </div>
        <div class="carousel__inner">
          ${carouselCard}
        </div>
      </div>
    `);
    
    this.elem = carouselRoot;
    const width = carouselCard.offsetWidth;
  
    let slideImage = () => {
      const rightArrow = document.querySelector('.carousel__arrow_right');
      const leftArrow = document.querySelector('.carousel__arrow_left');
      
      let counter = 0;
          
      leftArrow.style.display = 'none';
      rightArrow.style.display = '';
      
      rightArrow.addEventListener('click', () => {
        counter++;
        carouselCard.style.transform = `translateX(${-counter * width}px)`;
        if (counter === slidesLength) {
          rightArrow.style.display = 'none';
          leftArrow.style.display = '';
        } else {
          rightArrow.style.display = '';
          leftArrow.style.display = '';
          
        }
      });
      
      leftArrow.addEventListener('click', () => {
        counter--;
        carouselCard.style.transform = `translateX(${-counter * width}px)`;
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
    slideImage();
  
    let addToCart = () => {
      let plusButton = document.querySelector('.carousel__button');
      
      plusButton.addEventListener('click', () => {
        new CustomEvent("product-add", {
          detail: this.id,
          bubbles: true
        });
        
      });
      return;
    }
    addToCart();
  
  }
}
