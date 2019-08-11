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
            giftForm = document.getElementById('gift'),
            thanks = document.getElementById('thanks');

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

        thanks.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('close_icon')||
            target.classList.contains('close-btn')){
                thanks.style.display = 'none';
            }
        });

    };
    togglePopUp();


    const addingDots = () => {

        const addDots = (element, newDots) =>{

            element.forEach(() => {
                let li = document.createElement('li'),
                    dotButton = document.createElement('button');

                li.className = "dot";
                dotButton.className = "dotButton";
                
                newDots.appendChild(li);
                li.appendChild(dotButton);
            });
        };

        // main-slider
        const slide = document.querySelectorAll('.main-slider .slide'),
                dots = document.querySelector('.slider-dots');

        addDots(slide, dots);

        // gallery-slider
        const slideGal = document.querySelectorAll('.gallery-slider .slide'),
        dotsGal = document.querySelector('.gallery-slider-dots');

        addDots(slideGal, dotsGal);

    };
    addingDots();


    //----------------------------------------------------------------------------



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
            nextSlide(slide, currentSlide, 'slider-item-active');
            nextSlide(li, currentSlide, 'slick-active');
    
        });

        // arrow and dots gallery slider
        slider.addEventListener('click', (event) => {
            event.preventDefault();
    
            let target = event.target;

            if(!target.matches('.slider-arrow, span, .fa, .dot')){
                return;
            }
            prevSlide(slideGal, currentSlide, 'slider-item-active');
            prevSlide(liGal, currentSlide, 'slick-active');
   
            console.log(target);
            console.log(liGal);

            if (target.matches('#arrow-right') || target.matches('.fa-chevron-right')){
                currentSlide++;
            } else if (target.matches('#arrow-left') || target.matches('.fa-chevron-left')){
                currentSlide--;
            } 
            
            // else if (target.matches('.dot')){
            //     liGal.forEach((elem, index) => {
            //         console.log(elem);
            //         console.log(index);
            //         if(elem === target){
            //             currentSlide = index;
            //         }
            //     });
            // }
    
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length-1;
            }
            nextSlide(slideGal, currentSlide, 'slider-item-active');
            nextSlide(liGal, currentSlide, 'slick-active');
    
        });
        sliderDots.addEventListener('click', (e) => {
            const target = e.target;

            if (target.matches('li.dot')){
                liGal.forEach((elem, index) => {
                    console.log(elem);
                    console.log(index);
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }
            nextSlide(slideGal, currentSlide, 'slider-item-active');
            nextSlide(liGal, currentSlide, 'slick-active');

        });
                
        slider.addEventListener('mouseover', (event)=>{
            console.log(event.target);
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
    sliders();


    const servicesSlider = () => {
            const slideList = document.querySelectorAll('.services-slider div.slide'),
            slider = document.querySelector('.services-slider'),
            list = document.querySelector('.wr-slider');

        /* конфигурация */
        let width = 225, // ширина картинки
            count = 1, // видимое количество изображений
            position = 0; // положение ленты прокрутки
        
        slider.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target;

            if (target.matches('#arrow-right') || target.matches('.fa-chevron-right')){
                    // сдвиг вправо
                    position -= width * count;
                    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
                    position = Math.max(position, -width * (slideList.length - count));
                    if(position < -1125){
                        position = -1125;
                    }
                    list.style.marginLeft = position + 'px';
                } else if (target.matches('#arrow-left') || target.matches('.fa-chevron-left')){
                    // сдвиг влево
                    position += width * count;
                    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
                    position = Math.min(position, 0);
                    
                    list.style.marginLeft = position + 'px';
                } 
        });

    };
    servicesSlider();


    //---------------------------------------------

    const formValidator = () => {
        const textInput = document.querySelectorAll('input[type="text"]'),
            phoneInput = document.querySelectorAll('input[type ="tel"]');
    
        textInput.forEach((item) => {
            item.addEventListener('input', ()=>{
                item.value = item.value.replace(/[^а-я ]/gi, '');
            });
        });
            
        const setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select();
            }
        };
        
        const mask = function(event) {
            let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            if (def.length >= val.length) val = def;
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
            });
            if (event.type == "blur") {
                if (this.value.length == 2) this.value = "";
                } else setCursorPosition(this.value.length, this);
        };

        phoneInput.forEach((item) => {
            item.addEventListener("input", mask, false);
            item.addEventListener("focus", mask, false);
            item.addEventListener("blur", mask, false);
        });
    };
    formValidator();
    //export default formValidator;

    // ----------------------------------------


   
    //spinner();

    const sendForm = () => {
        const errorMessage = "Что-то пошло не так...",
            errorTitle = "Извините,",
            successMessage = "Спасибо! Мы свяжемся с вами в ближайшее время",
            thanks = document.getElementById('thanks'),
            forms = document.querySelectorAll('form'),
           // bannerForm = document.getElementById('banner-form'),
            spinners = document.querySelector('.floatingSquare'),
            statusMessage = document.createElement('div'), 
            check = document.getElementById('check1'),
            titleError = document.querySelector('#thnaks h4'),
            textError = document.querySelector('#thanks p');


            const spinner = ()=>{
                const floatingSquare = document.getElementById('floatingSquare');
                let div1 = document.createElement('div'),
                    div2 = document.createElement('div'),
                    div3 = document.createElement('div'),
                    div4 = document.createElement('div'),
                    div5 = document.createElement('div');
        
                    div1.className = "barlittle";
                    div2.className = "barlittle";
                    div3.className = "barlittle";
                    div4.className = "barlittle";
                    div5.className = "barlittle";
        
                    div1.setAttribute('id', 'block_1');
                    div2.setAttribute('id', 'block_2');
                    div3.setAttribute('id', 'block_3');
                    div4.setAttribute('id', 'block_4');
                    div5.setAttribute('id', 'block_5');
        
        
                    floatingSquare.appendChild(div1);
                    floatingSquare.appendChild(div2);
                    floatingSquare.appendChild(div3);
                    floatingSquare.appendChild(div4);
                    floatingSquare.appendChild(div5);
        
            };

        //statusMessage.textContent = 'Тут будет сообщение';
        statusMessage.style.cssText = 'font-size: 1.5rem; color:white; padding:10px';




        console.log(forms);
        //bannerForm.appendChild(statusMessage);


        const sendFunc = function(e) {
            e.preventDefault();

            if(!check.checked){
                document.getElementById('verify_checkbox').style.display = 'block';
            }
            if ( check.checked ) {

                document.getElementById('verify_checkbox').style.display = 'none';

                //spinner().style.display = "block";
                spinner();
                
                const formData = new FormData(this);  

                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                // c промисами 
                postData(body)
                    .then((response) => {
                        if(response.status !== 200){
                            throw new Error('status network not 200');
                        }
                        console.log(response);
                        spinners.style.display = "none";
                        thanks.style.display ="block";
                        document.getElementById('form1').style.display = "none";
                        document.getElementById('form2').style.display = "none";
                        this.reset();

                    })
                    .catch((error) => {
                        //spinner.forEach((item)=>{ item.style.display = "none"; });
                        spinners.style.display = "none";
                        titleError.textContent = errorTitle;
                        textError.textContent = errorMessage;
                        console.error(error);
                    });
            }

        };







        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body) //formData 
                });
            
        };

        forms.forEach((item) => {
            item.addEventListener('submit', sendFunc);
        });

        
    };
    sendForm();
    //export default sendForm;

   
        



});