const calc = () => {
    const total = document.getElementById('price-total'),
        cardOrder = document.getElementById('card_order'),
        inputs = document.querySelectorAll('#card_order input');


        // снимает все флажки
           for (let i in inputs){
           if (inputs[i].type == "radio"){
               inputs[i].checked = false;
           } 
           if (inputs[i].defaultChecked){
            inputs[i].checked = true;
           }
       }  

    console.log(inputs);
        
    //получаем данные по умочанию
    const getCheckedRadioValue = (name) => {
	    const elements = document.getElementsByName(name);	
	    for (let i=0, len = elements.length; i<len; ++i){
            if (elements[i].checked) {
                return elements[i].value;
            }
        }     
    };
    
    const getValue = (e) =>{
        const target = e.target,
            clubValue = getCheckedRadioValue('club-name'),
            timeValue = getCheckedRadioValue('card-type');


        if(clubValue == "mozaika"){
            if( timeValue == 1 || target.value == 1){
            total.textContent = 1999 + "₽";
            }else if( timeValue == 6 || target.value == 6){
                total.textContent = 9999 + "₽";
            }else if( timeValue == 9 || target.value == 9){
                total.textContent = 13999 + "₽";
            }else if(timeValue == 12 || target.value == 12){
                total.textContent = 19999 + "₽";
            }
        } 
        if(clubValue == "schelkovo"){
            if( timeValue == 1 || target.value == 1){
                total.textContent = 2999 + "₽";
            }else if( timeValue == 6 || target.value == 6){
                total.textContent = 14999 + "₽";
            }else if( timeValue == 9 || target.value == 9){
                total.textContent = 21999 + "₽";
            }else if(timeValue == 12 || target.value == 12){
                total.textContent = 24999 + "₽";
            }
        }
    };

    cardOrder.addEventListener('change', getValue);

};
export default calc;

