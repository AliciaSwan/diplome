const togglePopUp = () => {

    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        fixedGiftBtn = document.querySelector('.fixed-gift'),
        giftForm = document.getElementById('gift'),
        thanks = document.getElementById('thanks');

    document.addEventListener('click', (e) => {
        const target = e.target;
        // free-visit
        if(target.matches('.open-popup')){
            freeVisitForm.style.display = "block";
            freeVisitForm.addEventListener('click', (e) => {
                let target = e.target;
        
                if(target.classList.contains('close_icon') ||
                    target.classList.contains('overlay')) {
                    freeVisitForm.style.display = "none";
                }
            });
        }
        //callback-btn
        if(target.matches('.callback-btn')){
            callbackForm.style.display = "block";
            callbackForm.addEventListener('click', (event)=>{
                let target = event.target;
        
                if(target.classList.contains('close_icon') ||
                target.classList.contains('overlay')){
                    callbackForm.style.display ='none';
                }
            });
        }
        // fixed-gift
        if(target.matches('.fixed-gift img')){
            giftForm.style.display = "block";
            fixedGiftBtn.style.display = "none";
            giftForm.addEventListener('click', (event)=>{
                let target = event.target;
                if(target.classList.contains('close_icon') || target.classList.contains('close-btn') || 
                target.classList.contains('overlay')){
                    giftForm.style.display ='none';
                }
             });
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