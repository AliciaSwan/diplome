const clubChoise = () => {

    const button = document.querySelector('clubs-list'),
        ul = document.querySelector('ul');

    button.addEventListener('click', () => {
        ul.style.display = "block";
    });
};
clubChoise();

export default clubChoise;