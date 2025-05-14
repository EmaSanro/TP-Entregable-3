let inputs = document.querySelectorAll('input');
let form = document.querySelector('.form');
let btn = document.querySelector('#btn');
let telInput = document.querySelector('#telefono');
let emailInput = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');
let asunto = document.querySelector('#asunto');


form.addEventListener('submit', enviarFormulario);

mensaje.addEventListener('focusout', () => {
    if(mensaje.value == '') {
        mensaje.style.borderColor = '#cc0000';
    } else {
        mensaje.style.borderColor = 'var(--third-color)';
    }
})

mensaje.addEventListener('keypress', () => {
    mensaje.style.borderColor = 'var(--third-color)';
})

emailInput.addEventListener('focusout', () => {
    if(emailInput.value != '') {
        emailInput.classList.add('input');
        emailInput.style.borderColor = 'var(--third-color)';
    } else {
        if(telInput.value != '') {
            document.querySelector('.error').style.display = 'none';
        } else {
            emailInput.classList.remove('input');
            emailInput.style.borderColor = '#CC0000';
            document.querySelector('.error').style.display = 'inline';
        }
    }
})

emailInput.addEventListener('keypress', () => {
    emailInput.style.borderColor = 'var(--third-color)';
    document.querySelector('.error').style.display = 'none';
})

telInput.addEventListener('focusout', () => {
    if(telInput.value != '') {
        telInput.classList.add('input');
        telInput.style.borderColor = 'var(--third-color)';
    } else {
        if(emailInput.value != '') {
            document.querySelector('.error').style.display = 'none';
        } else {
            telInput.classList.remove('input');
            telInput.style.borderColor = '#CC0000';
            document.querySelector('.error').style.display = 'inline';
        }
    }
})

telInput.addEventListener('keypress', () => {
    telInput.style.borderColor = 'var(--third-color)';
    document.querySelector('.error').style.display = 'none';
})

asunto.addEventListener('focusout', () => {
    if(asunto.value != '') {
        asunto.classList.add('input');
    } else {
        asunto.classList.remove('input');
    }
})

for (const input of inputs) {
    input.addEventListener('keypress', () => {
        input.style.borderColor = 'var(--third-color)';
    })
}

function enviarFormulario(e) {
    e.preventDefault();
    if(mensaje.value != '' && (telInput.value != '' || emailInput.value != '')) {
        document.querySelector('.error').style.display = 'none';
        btn.innerHTML = '';
        btn.classList.add('sended');
        setTimeout(() => {
            window.location.href = "send.html";
        }, 5000)
    } else {
        document.querySelector('.error').style.display = 'inline';
    }
}