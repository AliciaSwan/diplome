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

export default formValidator;