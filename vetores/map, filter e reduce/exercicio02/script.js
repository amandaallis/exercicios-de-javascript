/*SOLICITE AO USUÁRIO QUATRO VALORES INTEIROS E ARMAZENE-OS NUM ARRAY SIMPLES. APÓS ISSO, UTILIZE A FUNÇÃO FILTER() PARA GERAR UM NOVO ARRAY CONTENDO APENAS OS VALORES PARES. */
let valores= []
for(let i=1; i<=4; i++ ){
    valores[i]= prompt(`Digite aqui o ${i} valor`)
}
let vetorPares= valores.filter(function(num){
    return num%2==0
})
document.write(vetorPares)