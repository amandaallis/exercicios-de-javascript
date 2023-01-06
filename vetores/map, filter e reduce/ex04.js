/* Faça um programa que tenha 6 numeros inteiros em um vetor e mostre: ´
• Os numeros pares digitados; ´
• A soma dos numeros pares digitados; ´
• Os numeros ´ ´ımpares digitados;
• A quantidade de numeros ´ ´ımpares digitados;*/
const numeros = [1, 2, 3, 4, 5, 6]
let par = numeros.filter(function(numero){
    return numero %2==0
})
let impar = numeros.filter(function(numero){
    return numero %2 !=0
})
console.log('Numeros pares')
let ler_par = par.map(function(numero){
    console.log(numero)
})
console.log('Numeros impares')
let ler_impar = impar.map(function(numero){
    console.log(numero)
})