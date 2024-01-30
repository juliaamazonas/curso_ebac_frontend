const form = document.getElementById('form-numeros');
var numeroA = document.getElementById('numero-A');
var numeroB = document.getElementById('numero-B');
let formEValido = false;

function validaForm(numeroUm, numeroDois) {
    return parseInt(numeroUm) < parseInt(numeroDois);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `<b>${numeroB.value}</b> é maior que <b>${numeroA.value}</b>. Formulário validado com sucesso!`;

    formEValido = validaForm(numeroA.value, numeroB.value);

    if (!formEValido) {

        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        
    } else {

        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = ' ';
        numeroB.value = ' ';
    }   
})

numeroB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaForm(e.target.value);
    
    if (numeroB.value > numeroA.value) {

        numeroB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})

