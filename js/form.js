var nomeInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var nomeMessage = document.getElementById('nomeMessage');
var emailMessage = document.getElementById('emailMessage');

nomeInput.addEventListener('focus', function () {
    exibirMensagem(nomeMessage, 'Por favor, registre seu nome completo!');
});

emailInput.addEventListener('focus', function () {
    exibirMensagem(emailMessage, 'Preencha com seu e-mail para entrarmos em contato!');
});

nomeInput.addEventListener('blur', function () {
    if (nomeInput.value.trim() !== '') {
        exibirMensagem(nomeMessage, 'Nome registrado!');
    } else {
        exibirMensagem(nomeMessage, 'Para continuar é preciso registrar seu nome completo!');
    }
});

emailInput.addEventListener('blur', function () {
    if (emailInput.value.trim() !== '') {
        exibirMensagem(emailMessage, 'E-mail registrado!');
    } else {
        exibirMensagem(emailMessage, 'Para continuar é preciso registrar seu e-mail!');
    }
});

function exibirMensagem(elemento, mensagem) {
    elemento.textContent = mensagem;
}