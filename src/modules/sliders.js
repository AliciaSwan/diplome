const sliders = () => {
    const sliderMain = document.querySelector('.main-slider'),
        slideMain = document.querySelectorAll('.main-slider .slide'),
        li = document.querySelectorAll('.main-slider-dots.slider-dots li.dot'),
        mainDotButtons = document.querySelector('.main-slider-dots'),
        buttonsMain = document.querySelectorAll('.main-slider-dots .dotButton');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) =>{
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) =>{
        elem[index].classList.add(strClass);
    };

    //autoplay
    const autoPlaySlide = () => {
        // main-slider
        prevSlide(slideMain, currentSlide, 'slider-item-active');
        prevSlide(li, currentSlide, 'slick-active');
        
        currentSlide++;
        if(currentSlide >= slideMain.length){
            currentSlide = 0;
        }
        // main-slider
        nextSlide(slideMain, currentSlide, 'slider-item-active');
        nextSlide(li, currentSlide, 'slick-active');
    };

    const startSlide = (time = 4000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
            clearInterval(interval);
    };


    const actionDots = (buttonSelector, sliderButtonSelector, slide, slideLi) =>{
        buttonSelector.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('button')){
                return;
            }

            prevSlide(slide, currentSlide, 'slider-item-active');
            prevSlide(slideLi, currentSlide, 'slick-active');

            console.log(target);
            if(target.matches('button') || target == "button" || target.matches('li .dot')){
                sliderButtonSelector.forEach((elem, index) => {
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length-1;
            }

            nextSlide(slide, currentSlide, 'slider-item-active');
            nextSlide(slideLi, currentSlide, 'slick-active');

        });
    };
    actionDots(mainDotButtons, buttonsMain, slideMain, li);

    sliderMain.addEventListener('mouseover', (event)=>{
        if( event.target.matches('.dotButton') ||
        event.target.matches('img') ||
        event.target.matches('.dot')){
            stopSlide();
        }
    });
    sliderMain.addEventListener('mouseout', (event)=>{
        if( event.target.matches('.dotButton') ||
        event.target.matches('img') ||
        event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(2000);
};

export default sliders;