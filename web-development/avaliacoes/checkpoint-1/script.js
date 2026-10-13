//Questão 3
//Repositório para o Checkpoint #1 de Engenharia de Software

//Questão 1
//node -v  -->  v24.14.0
//npm -v  -->  11.9.0
//git --version  -->  git version 2.53.0.windows.2

//Questão 2
console.log('Mensagem inicial')
alert('Bem-vindo ao Checkpoint!')

//Questão 4
var n1 = true
var n2 = 67
let n3 = 'texto'
let n4 = "checkpoint 1"
const n5 = false
const n6 = 21
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
console.log(n6)

//Questão 5
let a = 16
let b = 4
console.log('a + b = ' + (a+b))
console.log('a - b = ' + (a-b))
console.log('a x b = ' + (a*b))
console.log('a / b = ' + (a/b))

//Questão 6
console.log(1 == '1')
console.log(1 === '1')
console.log(true == 'true')
console.log(true === 'true')
if (a > b){
    console.log('O valor da variável a é maior que o valor da variável b')
}
let c = 1
if (c < b){
    console.log('O valor da variável b é maior que o valor da variável c')
}

//Questão 7
let informação = true
let fofoca = false
let num1 = 3
let num2 = 5
console.log(informação && fofoca)
console.log(informação || fofoca)
console.log(!informação)
console.log(num1 && num2)
console.log(num1 || num2)
console.log(!num1)

//Questão de 8 
//"Exemplo de branch e merge"

// Questão 9
function compararNumeros(a1, b1) {

if (a1 > b1) {
    return "A é maior"
}
else if (b1 > a1) {
    return "B é maior"
}
else {
    return "Ambos são iguais"
}
}
console.log(compararNumeros(5, 10)); // esperado: "B é maior"
console.log(compararNumeros(10, 5)); // esperado: "A é maior"
console.log(compararNumeros(7, 7));  // esperado: "Ambos são iguais"

// Questão 10
let numero_a = 10
let numero_b = 15
let booleana_a = true
let booleana_b = false

console.log("Soma: ", numero_a + numero_b)
console.log(booleana_a && booleana_b)
console.log(booleana_a || booleana_b)
