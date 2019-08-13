const sliders = () => {
    //   main-slider
    const slide = document.querySelectorAll('.main-slider .slide'),
        li = document.querySelectorAll('.main-slider-dots.slider-dots li.dot'),
        mainDotButtons = document.querySelector('.main-slider-dots'),
        buttonsMain = document.querySelectorAll('.main-slider-dots .dotButton');
    console.log(mainDotButtons);
    // gallery-slider
    const slider = document.querySelector('.gallery-slider'),
        slideGal = document.querySelectorAll('.gallery-slider .slide'),
        sliderDots = document.querySelector('.gallery-slider-dots'),
        
        liGal = document.querySelectorAll('.gallery-slider-dots.slider-dots li.dot'),
        galleryDotButtons = document.querySelector('.gallery-slider-dots'),
        buttonsGal = document.querySelectorAll('.gallery-slider-dots .dotButton');

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
        prevSlide(slide, currentSlide, 'slider-item-active');
        prevSlide(li, currentSlide, 'slick-active');
        // gallery-slider
        prevSlide(slideGal, currentSlide, 'slider-item-active');
        prevSlide(liGal, currentSlide, 'slick-active');
        
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        // main-slider
        nextSlide(slide, currentSlide, 'slider-item-active');
        nextSlide(li, currentSlide, 'slick-active');
        // gallery-slider
        nextSlide(slideGal, currentSlide, 'slider-item-active');
        nextSlide(liGal, currentSlide, 'slick-active');
    };

    const startSlide = (time = 4000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
            clearInterval(interval);
    };


    const actionDots = (buttonSelector, sliderButtonSelector) =>{
        buttonSelector.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('button')){
                return;
            }
            prevSlide(slide, currentSlide, 'slider-item-active');
            prevSlide(liGal, currentSlide, 'slick-active');

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
            nextSlide(liGal, currentSlide, 'slick-active');

        });
    };
    actionDots(galleryDotButtons, buttonsGal);
    actionDots(mainDotButtons, buttonsGal);



    // arrow  gallery slider
    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.matches('.slider-arrow, span, .fa, li.dot, button.dotButton')){
            return;
        }
        prevSlide(slideGal, currentSlide, 'slider-item-active');
        prevSlide(liGal, currentSlide, 'slick-active');

        if (target.matches('#arrow-right') || target.matches('.fa-chevron-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left') || target.matches('.fa-chevron-left')){
            currentSlide--;
        } 

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length-1;
        }
        nextSlide(slideGal, currentSlide, 'slider-item-active');
        nextSlide(liGal, currentSlide, 'slick-active');

    });
            
    slider.addEventListener('mouseover', (event)=>{
        if(event.target.matches('#arrow-right') ||
        event.target.matches('#arrow-left') ||
        event.target.matches('.fa') ||
        event.target.matches('.dotButton') ||
        event.target.matches('img') ||
        event.target.matches('.dot')){
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event)=>{
        if(event.target.matches('#arrow-right') ||
        event.target.matches('#arrow-left') ||
        event.target.matches('.fa') ||
        event.target.matches('.dotButton') ||
        event.target.matches('img') ||
        event.target.matches('.dot')){
            startSlide();
        }
    });

    startSlide(2000);
};

export default sliders;