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

export default clubChoise;