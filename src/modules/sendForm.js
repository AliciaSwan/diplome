const sendForm = () => {
    const errorMessage = "Что-то пошло не так...",
        errorTitle = "Извините,",
        thanks = document.getElementById('thanks'),
        forms = document.querySelectorAll('form'),
        floatingSquare = document.getElementById('floatingSquare'),
        titleError = document.querySelector('#thanks h4'),
        textError = document.querySelector('#thanks p');

        const spinner = ()=>{
            const floatingSquare = document.getElementById('floatingSquare'),
            floatingSquares = document.querySelectorAll('.floatingSquare'),
            form = document.querySelector('form'),
            forms = document.querySelectorAll('form');

            const divMain = document.createElement('div'),
                div1 = document.createElement('div'),
                div2 = document.createElement('div'),
                div3 = document.createElement('div'),
                div4 = document.createElement('div'),
                div5 = document.createElement('div');
    
                divMain.className = "floatingSquare";
                div1.className = "barlittle";
                div2.className = "barlittle";
                div3.className = "barlittle";
                div4.className = "barlittle";
                div5.className = "barlittle";
    
                divMain.setAttribute('id', 'floatingSquare');
                div1.setAttribute('id', 'block_1');
                div2.setAttribute('id', 'block_2');
                div3.setAttribute('id', 'block_3');
                div4.setAttribute('id', 'block_4');
                div5.setAttribute('id', 'block_5');

                forms.forEach((item) => {
                    item.appendChild(divMain);
                });
    
                divMain.appendChild(div1);
                divMain.appendChild(div2);
                divMain.appendChild(div3);
                divMain.appendChild(div4);
                divMain.appendChild(div5);
        };

       


        const sendFunc = function(e) {
            e.preventDefault();
                const check = this.querySelector('.personal-data input[type=checkbox]'),
                spinners = document.querySelectorAll('.floatingSquare'),
                checkboxMessage = this.querySelector('#verify_checkbox');
                checkboxMessage.style.display = 'none';

                // const statusMessage = document.createElement('div');
                // statusMessage.textContent = 'Загрузка';
                // statusMessage.style.cssText = 'font-size: 1rem; color:yellow; padding:10px';
        
                // floatingSquare.appendChild(statusMessage);
                // floatingSquare.style.display = "block";
                //spinner();
                spinners.forEach((item) => {
                    item.style.display = "block";
                });
                
                const formData = new FormData(this);  
                let body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                // c промисами 
                postData(body)
                    .then((response) => {
                        if(check.checked){
                            if(response.status !== 200){
                                throw new Error('status network not 200');
                            }
                            console.log(response);
                            spinners.forEach((item) => {
                                item.style.display = "none";
                            });
                            thanks.style.display ="block";
                            document.getElementById('callback_form').style.display = "none";
                            document.getElementById('free_visit_form').style.display = "none";
                            this.reset();
                            document.getElementById('price-total').textContent = 1999 + "₽";
                        }else if(!check.checked){
                            checkboxMessage.style.display = 'block';
                            spinners.forEach((item) => {
                                item.style.display = "none";
                            });
                            return;
                        }
                    })
                    .catch((error) => {
                        //checkboxMessage.style.display = 'block';
                        spinners.forEach((item)=>{ item.style.display = "none"; });
                        thanks.style.display ="block";
                        titleError.textContent = errorTitle;
                        textError.textContent = errorMessage;
                        console.error(error);
                        this.reset();
                    });

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
export default sendForm;