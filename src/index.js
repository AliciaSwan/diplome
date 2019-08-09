window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    // import clubChoise from './src/modules/clubChoise';
    // import togglePopUp from './src/modules/togglePopUp';
    // import slider from '/src/modules/slider';
    // import addDots from './src/modules/addDots';

    const clubChoise = () => {

        const button = document.querySelector('.clubs-list'),
            ul = document.querySelector('ul'),
            p = document.querySelector('p');
    
        button.addEventListener('click', (e) => {
            const target = e.target;
            if(ul.style.display == 'block'){
                ul.style.display = "none";
            } else {
                ul.style.display = "block";
            }
            
        });
    };
    clubChoise();

    const togglePopUp = () => {

        const openPopup = document.querySelector('.open-popup'),
            freeVisitForm = document.getElementById('free_visit_form'),
            callBackBtn = document.querySelector('.callback-btn'),
            callbackForm = document.getElementById('callback_form'),
            fixedGiftBtn = document.querySelector('.fixed-gift'),
            giftForm = document.getElementById('gift');

        openPopup.addEventListener('click', () => {
            freeVisitForm.style.display = "block";
        });
        callBackBtn.addEventListener('click', () => {
            callbackForm.style.display = "block";
        });
        fixedGiftBtn.addEventListener('click', () => {
            giftForm.style.display = "block";
            fixedGiftBtn.style.display = "none";
        });

        freeVisitForm.addEventListener('click', (e) => {
            let target = e.target;

            if(target.classList.contains('close_icon')) {
                freeVisitForm.style.display = "none";
            }else{
                target = target.closest('.form-content');
    
                if(!target){
                    freeVisitForm.style.display = 'none';
                }
            }
        });

        callbackForm.addEventListener('click', (event)=>{
            let target = event.target;
    
            if(target.classList.contains('close_icon')){
                callbackForm.style.display ='none';
            }else{
                target = target.closest('.form-content');
    
                if(!target){
                    callbackForm.style.display = 'none';
                }
            }
    
        });

        
        giftForm.addEventListener('click', (event)=>{
            let target = event.target;
            console.log(target);
            if(target.classList.contains('close_icon')){
                giftForm.style.display ='none';
            }else if(target.classList.contains('close-btn')){
                giftForm.style.display ='none';
            }else{
                target = target.closest('.form-content');
    
                if(!target){
                    giftForm.style.display = 'none';
                }
            }
    
        });


    };
    togglePopUp();


    const addDots = () => {
        const slide = document.querySelectorAll('.main-slider .slide'),
            dots = document.querySelector('.slider-dots');
    
        slide.forEach(() => {
            let li = document.createElement('li'),
                dotButton = document.createElement('button');

            li.className = "dot";
            dotButton.className = "dotButton";
            
            dots.appendChild(li);
            li.appendChild(dotButton);
        });
    };
    addDots();

    const slider = () => {
        const slider = document.querySelector('.main-slider'),
            slide = document.querySelectorAll('.main-slider .slide'),
            li = document.querySelectorAll('.dot'),
            dotButtons = document.querySelector('.slider-dots'),
            buttons = document.querySelectorAll('.dotButton');
        let currentSlide = 0,
            interval;

        const autoPlaySlide = () => {
            slide[currentSlide].classList.remove('slider-item-active');
            li[currentSlide].classList.remove('slick-active');
            
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            slide[currentSlide].classList.add('slider-item-active');
            li[currentSlide].classList.add('slick-active');
        };
        const startSlide = (time = 5000) => {
            interval = setInterval(autoPlaySlide, time);
    
        };
        const stopSlide = () => {
                clearInterval(interval);
        };


        dotButtons.addEventListener('click', (event) => {
            event.preventDefault();
    
            let target = event.target;
            console.log(buttons);
            if(!target.matches('button')){
                return;
            }
            slide[currentSlide].classList.remove('slider-item-active');
            li[currentSlide].classList.remove('slick-active');
    
            if(target.matches('button') || target == "button"){
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
            slide[currentSlide].classList.add('slider-item-active');
            li[currentSlide].classList.add('slick-active');
    
        });
    
        dotButtons.addEventListener('mouseover', (event)=>{
            if(event.target.matches('.dot')){
                stopSlide();
            }
        });
        dotButtons.addEventListener('mouseout', (event)=>{
            if(event.target.matches('.dot')){
                startSlide();
            }
        });

        startSlide(5000);

    };
    slider();



});