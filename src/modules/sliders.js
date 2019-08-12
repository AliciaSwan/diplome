const sliders = () => {
    //   main-slider
    const slide = document.querySelectorAll('.main-slider .slide'),
        li = document.querySelectorAll('.dot'),
        dotButtons = document.querySelector('.slider-dots'),
        buttons = document.querySelectorAll('.dotButton');

    // gallery-slider
    const slider = document.querySelector('.gallery-slider'),
        sliderDots = document.querySelector('.gallery-slider-dots'),
        slideGal = document.querySelectorAll('.gallery-slider .slide'),
        liGal = document.querySelectorAll('.gallery-slider-dots.slider-dots li.dot'),
        // dotButtons = document.querySelector('.slider-dots'),
        buttonsGal = document.querySelectorAll('.dotButton');

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

    // dots of main slider
    dotButtons.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.matches('button')){
            return;
        }
        prevSlide(slide, currentSlide, 'slider-item-active');
        prevSlide(li, currentSlide, 'slick-active');

        if(target.matches('button') || target == "button" || target.matches('li .dot')){
            buttons.forEach((elem, index) => {
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
        nextSlide(li, currentSlide, 'slick-active');

    });

    // arrow and dots gallery slider
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
        
        if (target.matches('li .dot') || target == "button" || target.matches('dotButton')){
            buttonsGal.forEach((elem, index) => {
                console.log(elem);
                console.log(index);
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