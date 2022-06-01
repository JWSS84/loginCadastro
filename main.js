let btn = document.querySelector('.fa-eye')
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')


let senha = document.querySelector('#password')
let labelSenha = document.querySelector('#labelSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false;

let fone = document.querySelector('#fone')
let labelFone = document.querySelector('#labelFone')
let validFone = false;

// email.addEventListener('keyup', () => {
//     if (email.value.length <= 10) {
//         labelEmail.setAttribute('style', 'color:red')
//         labelEmail.innerHTML = '<i>E-mail *Insira um email de formato correto; ex: nome@gmail.com</i>'
//     } else {
//         labelEmail.setAttribute('style', 'color:green')
//         labelEmail.innerHTML = 'E-mail'
//     }
// })
// senha.addEventListener('keyup', () => {
//     if (senha.value.length <= 5) {
//         labelSenha.setAttribute('style', 'color:red')
//         labelSenha.innerHTML = '<i>Senha *Insira uma senha de 6 caracteres</i>'
//     } else {
//         labelSenha.setAttribute('style', 'color:green')
//         labelSenha.innerHTML = 'Senha'
//     }
// })

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = '<i>Nome * Insira no mínimo 3 caracteres</i>'
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color:green')
        labelNome.innerHTML = 'Nome'
        validNome = true;
    }
})
cpf.addEventListener('keyup', () => {
    if (cpf.value.length < 11) {
        labelCpf.setAttribute('style', 'color:red')
        labelCpf.innerHTML = '<i>Cpf * Insira apenas os 11 dígitos do cpf</i>'
        validCpf = false;
    } else {
        labelCpf.setAttribute('style', 'color:green')
        labelCpf.innerHTML = 'Cpf'
        validCpf = true;
    }
})
fone.addEventListener('keyup', () => {
    if (fone.value.length < 9) {
        labelFone.setAttribute('style', 'color:red')
            labelFone.innerHTML = '<i>Telefone *Insira apenas os 9 dígitos do telefone</i>'
            validFone = false;
    } else {
        labelFone.setAttribute('style', 'color:green')
        labelFone.innerHTML = 'Telefone'
        validFone = true;
    }
})


btn.addEventListener('click', () => {
    let inputPassword = document.querySelector('#password')

    if(inputPassword.getAttribute('type') == 'password'){
        inputPassword.setAttribute('type','text')
    }else{
        inputPassword.setAttribute('type','password')
    }
})

function cadastrar() {
    if (validNome && validCpf && validFone) {
        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = 'cadastrando usuário'
    }else{
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'preencha os campos obrigatórios antes de cadastrar!'
    }
    
}