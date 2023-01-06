/*Solicite ao usuário as quatro notas (inteiro) bimestrais de um aluno, armazenando-as num array simples. Após isso, utilize a função reduce() para calcular a média desse aluno. */
const notas = []

for(let i= 0; i<4; i++){
    notas[i]= Number(prompt(`Digite aqui o ${i+1} valor: `)) 
}
let soma= notas.reduce(function(inicial, notas){
    return inicial+notas

})
let media = soma/notas.length
document.write(`A média desse aluno é de ${media}`)