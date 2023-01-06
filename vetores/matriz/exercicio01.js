/*    Crie uma função que recebe como argumento o nome de um aluno.
    Verifique se o aluno está presente na lista e retorne a idade que se encontra no mesmo índice.
    Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.*/
const alunos = ["João", "Juliana", "Ana", "Caio"]
const idades = [18, 19, 22, 25, 30]
const alunos_idades = [alunos, idades]

function mostra(aluno){
    if (alunos_idades[0].includes(aluno)){
        console.log(`${aluno} está cadastrado`)
        const indice = alunos_idades[0].indexOf(aluno)
        console.log(`O aluno ${aluno} possui ${alunos_idades[1][indice]} anos`)
    }
    else{console.log('Não está presente')}
}
mostra('João')