/*FUNÇÕES REGULARES VS ARROW FUNCTION
function imprimeTexto(texto){
   console.log(texto)
}*/
let imprimeTexto = texto => console.log(texto)
imprimeTexto('olá')

/*function soma(n1, n2){
    return n1+n2
}
*/
let soma = (n1, n2) => `a soma é ${n1+n2}`
imprimeTexto(soma(10,11))
/*
function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}`
}
*/
let nomeIdade = (nome, idade) => `Meu nome é ${nome} e minha idade é ${idade}`
imprimeTexto(nomeIdade('Amanda', 18))

/*
function multiplica(numero1, numero2){
    return numero1 * numero2
}
*/
let multiplica= (n1, n2) => `a multiplicação de ${n1} X ${n2} é ${n1*n2}` 
imprimeTexto(multiplica(2,1))

