let inputs = document.querySelectorAll('input');
let btn = document.querySelector('#btn');
let telInput = document.querySelector('#telefono');
let emailInput = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');


btn.addEventListener('click', enviarFormulario);

for (const input of inputs) {
    input.addEventListener('focusout', () => {
        if(input.value != '') {
            input.classList.add('input');
            if(input.id == 'telefono' || input.id == 'email') {
                input.style.borderColor = '#926FA6';
            }
        } else {
            input.classList.remove('input');
            if(input.id == 'telefono' || input.id == 'email') {
                input.style.borderColor = 'rgb(218, 29, 29)';
            }
        }
    })
    input.addEventListener('keypress', () => {
        input.style.borderColor = '#926FA6';
    })
}

function enviarFormulario(e) {
    e.preventDefault();
    if(telInput.value == '' && emailInput.value == '') {
        document.querySelector('.error').style.display = 'inline';
    } else {
        document.querySelector('.error').style.display = 'none';
    }
    console.log(telInput.value);
    
}