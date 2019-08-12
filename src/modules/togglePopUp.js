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

export default togglePopUp;