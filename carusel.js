const sliderClients = (btnRightSelector, btnLeftSelector, sliderSelector, slidesSelector) => {
    const btnRight = document.querySelector('#arrow-right');
    const btnLeft = document.querySelector('#arrow-left');
    let slidesArr = document.querySelectorAll('.services-slider.slide');
    const slider = document.querySelector('.services-slider');
    let currentSlideIndex = 0;
  
    const nextSlideShow = () => {
      if (currentSlideIndex >= slidesArr.length - 1){
          currentSlideIndex = 0;
      }else {
         currentSlideIndex++; 
      } 
    };
  
    const prevSlideShow = () => {
      if (currentSlideIndex < 1){
        currentSlideIndex = slidesArr.length - 1;
      }else{
        currentSlideIndex--;
      }
    };
  
    const changeSlide = () => {
      slider.style.cssText = `
        transform: translateX(calc(-33.33% * ${currentSlideIndex}));
      `;
    };
    
    btnRight.addEventListener('click', (e) => {
        e.preventDefault();
      nextSlideShow();
      changeSlide();
    });
  
    btnLeft.addEventListener('click', (e) => {
        e.preventDefault();
      prevSlideShow();
      changeSlide();
    });

export default sliderClients;