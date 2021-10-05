const fName = document.querySelector('input[name=fname]');
const lName = document.querySelector('input[name=lname]');
const email = document.querySelector('input[name=email]');
const pWord = document.querySelector('input[name=pWord]');
const form = document.querySelector('form');
const formSubmit = document.querySelector('.submitMsg');

let isFormValid = false;
let validationOn = false;

const resetInput = (el) => {
    el.classList.remove('invalid');
    el.nextElementSibling.classList.add('hiddenMsg');
}

const invalidateInput = (el) => {
    el.classList.add('invalid');
    el.nextElementSibling.classList.remove('hiddenMsg');
}

const validateInput = (el) => {
    if(!validationOn) return;
    isFormValid = true;
    resetInput(fName);
    resetInput(lName);
    resetInput(email);
    resetInput(pWord);


    if(!fName.value){
        isFormValid = false;
        invalidateInput(fName);
    }
    if(!lName.value){
        isFormValid = false;
        invalidateInput(lName);
    }    
    if(!email.value){
        isFormValid = false;
        invalidateInput(email);
    }
    if(!pWord.value){
        isFormValid = false;
        invalidateInput(pWord);
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    validationOn = true;
    validateInput();
    if(isFormValid){
        form.remove();
        formSubmit.classList.remove('hiddenMsg');
    }
});

