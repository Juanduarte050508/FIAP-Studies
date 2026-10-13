//funcao para alternar aberturas contrarias
const trocar = (x) =>{
    const troca = document.querySelector(x)
    if (!troca.classList.contains('hide')){
        troca.classList.toggle('hide')
    }
}
//abre a aba de login
const botaoLogin = document.querySelector('.login')
botaoLogin.addEventListener('click',()=>{
    trocar('.cadastroForm')
    const loginForm = document.querySelector('.loginForm')
    //alterna os valores internos
    loginForm.classList.toggle('hide')
})
//funcao para abrir e fechar o cadastro
const botaoCadastro = document.querySelector('.cadastro')
botaoCadastro.addEventListener('click',()=>{
    trocar('.loginForm')
    const cadastroForm = document.querySelector('.cadastroForm')
    //alterna os valores internos
    cadastroForm.classList.toggle('hide')
})

//Aceita ou nao as credenciais
const confirmarL = document.getElementById('confirmarL')
confirmarL.addEventListener('click',()=>{
    const usuario = document.getElementById('usuarioL')
    const senha = document.getElementById('senhaL')
    let encontrou = false
    for(let i = 0 ; i<localStorage.length;i++){
        console.log(localStorage.key(i))
        if (usuario.value == localStorage.key(i)){
            const user = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if (senha.value == user.passW){
                alert(`Bem vindo(a) ${user.user}`)
                encontrou = true
                return
            }else{
                alert('Senha incorreta')
                return
            }}}
    if (!encontrou){
        alert('Usuário não encontrado')
    }
    usuario.value=''
    senha.value = ''
})

//Cadastra o usuario e senha
const confirmarC = document.getElementById('confirmarC')
confirmarC.addEventListener('click',()=>{
    //seleciona o id dos campos
    const usuario = document.getElementById('usuarioC')
    const senha = document.getElementById('senhaC')
    //verifica se há usuario existente
    for(let i = 0 ; i<localStorage.length;i++){
        console.log(localStorage.key(i))
        if (usuario.value == localStorage.key(i)){
        alert('Usuário já existe')
        return
        }
    }
    //caso não exista, cria novo usuário
    const novoUsuario = {
        user :usuario.value,
        passW :senha.value
    }
    localStorage.setItem(usuario.value.toString(),JSON.stringify(novoUsuario))
    usuario.value=''
    senha.value = ''
})

let imgCounter = 0
let presentChoice = 0
const present1 =[
    '.images/.presentation/p1/1-1.png',
    '.images/.presentation/p1/1-2.png',
    '.images/.presentation/p1/1-3.png',
    '.images/.presentation/p1/1-4.png',
    '.images/.presentation/p1/1-5.png',
    '.images/.presentation/p1/1-6.png',
    '.images/.presentation/p1/1-7.png',
    '.images/.presentation/p1/1-8.png',
    '.images/.presentation/p1/1-9.png'
]
const present2 =[
    '.images/.presentation/p2/p2.svg',
]

const botaoSlides1 = document.querySelector('.visualize1')
botaoSlides1.addEventListener('click',()=>{
    if(presentChoice == 0){
        fechar(presentChoice,1,'.carousel')
    }
    imgCounter = 0
    const slide = document.querySelector('.carousel img')
    slide.src = present1[imgCounter]
    presentChoice = 0
})
const botaoSlides2 = document.querySelector('.visualize2')
botaoSlides2.addEventListener('click',()=>{
    if (presentChoice == 1){
        fechar(presentChoice,0,'.carousel')
    }
    imgCounter = 0
    const slide = document.querySelector('.carousel img')
    slide.src = present2[imgCounter]
    presentChoice = 1
}) 
const botProx = document.getElementById('proxima')
botProx.addEventListener('click',()=>{
    if(presentChoice === 0){
        const imagem = document.querySelector('.carousel img')
        if(imgCounter<(present1.length-1)){
            imgCounter++
            imagem.src = present1[imgCounter]
        }else{
            imgCounter = 0
            imagem.src = present1[imgCounter]
        }
    }
})

const botUlt = document.getElementById('ultima')
botUlt.addEventListener('click',()=>{
    if(presentChoice === 0){
        const imagem = document.querySelector('.carousel img')
        if(imgCounter==0){
            imgCounter=present1.length-1
            imagem.src = present1[imgCounter]
        }else{
            imgCounter--
            imagem.src = present1[imgCounter]
        }
    }
})

const fechar= (x,y,z) =>{
    const fecha = document.querySelector(z)
    if (fecha.classList.contains('hide')){
        fecha.classList.toggle('hide')
    }else{
        fecha.classList.toggle('hide')
    }
}
