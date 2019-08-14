
    import '@babel/polyfill';
    import 'nodelist-foreach-polyfill';
    import elementClosest from 'element-closest';
    import 'whatwg-fetch';

    elementClosest(window);
    require ('formdata-polyfill');
    import clubChoise from './modules/clubChoise';
    import togglePopUp from './modules/togglePopUp';
    import sliders from './modules/sliders';
    import addingDots from './modules/addingDots';
    import formValidator from './modules/formValidator';
    import servicesSlider from './modules/servicesSlider';
    import sendForm from './modules/sendForm';
    import calc from './modules/calc';
    import gallery from './modules/gallery';



    clubChoise();
    togglePopUp();
    addingDots();
    sliders();
    servicesSlider();
    formValidator();
    sendForm();
    calc();
    gallery();
