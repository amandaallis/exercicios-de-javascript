/*Exiba no console quantos números abaixo de 501 o array abaixo possui: */
const vet=[2, 3, 4, 5, 8, 10, 20, 100, 500, 501, 502, 503, 504]
let soma=0;
const vetMaiores= vet.filter(function(vet){
    if(vet<501){
        return vet
    }
})
console.log(`Os valores menores que 501 são: ${vetMaiores}`)

for(let i=0; i<vetMaiores.length; i++){
    soma++;
}
console.log(soma)







