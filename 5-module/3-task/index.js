function initCarousel() {
  const inner = document.querySelector('.carousel__inner');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  let counter = 0;
  
  rightArrow.addEventListener('click', () => {
    counter -= 988;
    inner.style.transform = `translateX(${counter}px)`;
    (() => {
      if (counter === -2964) {
        rightArrow.style.display = 'none';
      } else {
        rightArrow.style.display = '';
        console.log('no');
      }
    })();
  });
  
  leftArrow.addEventListener('click', () => {
    counter += 988;
    inner.style.transform = `translateX(${counter}px)`;
    if (counter === 0) {
      leftArrow.style.display = 'none';
    } else {
      leftArrow.style.display = '';
    }
    
  });
  
  return;
}
initCarousel();