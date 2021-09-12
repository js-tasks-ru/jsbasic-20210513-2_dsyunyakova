function initCarousel() {
  const inner = document.querySelector('.carousel__inner');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const width = inner.offsetWidth; 
  let counter = 0;
  
  leftArrow.style.display = 'none';
  
  rightArrow.addEventListener('click', () => {
    counter++;
    inner.style.transform = `translateX(${-counter * width}px)`;
    if (counter === 3) {
      rightArrow.style.display = 'none';
      leftArrow.style.display = '';
    } else {
      rightArrow.style.display = '';
      leftArrow.style.display = '';
    }
  });
  
  leftArrow.addEventListener('click', () => {
    counter--;
    inner.style.transform = `translateX(${-counter * width}px)`;
    if (counter === 0) {
      leftArrow.style.display = 'none';
      rightArrow.style.display = '';
    } else {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    }
  });
  
  return;
}
initCarousel();