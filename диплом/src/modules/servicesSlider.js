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

export default servicesSlider;