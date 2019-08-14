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
            dots = document.querySelector('.main-slider-dots');

    addDots(slide, dots);

    // gallery-slider
    const slideGal = document.querySelectorAll('.gallery-slider .slide'),
    dotsGal = document.querySelector('.gallery-slider-dots');

    addDots(slideGal, dotsGal);

};
export default addingDots;