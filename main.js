let btn = document.querySelector('#icon')
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

let senha = document.querySelector('#password')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false;


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false;

let fone = document.querySelector('#fone')
let labelFone = document.querySelector('#labelFone')
let validFone = false;

// validaçoes dos campos do formulario de cadastro
senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = '<i>Senha * Insira no mínimo 6 caracteres</i>'
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color:green')
        labelSenha.innerHTML = 'Senha'
        validSenha = true;
    }
})
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
    let inputSenha = document.querySelector('#password')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

// funcao realizar o login

function entrar() {
    window.location.href = "./home.html"
    let nomeUser = document.querySelector('#nome')

    let listaUser = []

    let userValid = {
        nome: '',
        user: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) => {
        if (nomeUser.value == userValid.user) {

            userValid = {
                nome: item.nome,
                user: item.user
            }

        }
    })

}
// funcao de cadastro e armazenamento no localstorage
function cadastrar() {
    window.location.href = "./home.html";
    if (validNome && validCpf && validFone) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            user: nome.value,
            cpf: cpf.value,
            fone: fone.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = 'cadastrando usuário...';
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''

        setTimeout(() => {
            window.location.href = "./home.html";
        }, 3000)


    } else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'preencha os campos obrigatórios antes de cadastrar!'
        msgSuccess.setAttribute('style', 'display:none')
        msgSuccess.innerHTML = '';
    }

}