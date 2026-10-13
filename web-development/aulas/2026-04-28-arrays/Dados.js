/* /* const letras = Array.from
("Javascript")
console.log(letras)

const prioridades = Array.of
("Alta", "Média","Baixa")
console.log(prioridades) 

// Array literal (forma mais comum)
const tarefas = [
  "Estudar JavaScript",
  "Criar projeto TaskMaster",
  "Preparar apresentação",
  "Revisar código"
];
console.log
("Array de tarefas:", tarefas);

// -1 = Ultimo valor do array
console.log (tarefas[0])
console.log(tarefas[tarefas.length -1])

const nomes = ["Daniel"]
nomes[0] = "Matheus"
console.log(nomes)

nomes.push("Daniel")
console.log(nomes)

//adiciona ao ulitmo da lista 
nomes.push("Sem nome")
console.log(nomes)

//pop remove o ultimo da lista
nomes.pop()
console.log(nomes)

//adiciona no começo do array
nomes.unshift("Felipe")
console.log(nomes)

//remove fo começo do array
nomes.shift("Felipe")
console.log(nomes)

nomes.push("José")
nomes.push("Augusto")
nomes.push("Augusto")
nomes.push("Lucas")
nomes.push("Roberto")
nomes.push("André")
nomes.push("Aristóteles")


console.log(nomes)


//remover str especifica
//1° caracter indice/ 2° caracter quantidade
nomes.splice(2, 1)
console.log(nomes)

//adicionar algo 
nomes.splice(2,0,"José")
console.log(nomes)

//substituir 
//adicionar algo 
nomes.splice(2,1,"José")
console.log(nomes)

//laço de repetição, retorno implicito
nomes.forEach((i,j) => i)

//laço de repetição, retorno explciito
nomes.forEach((t,i) => {
    console.log(`${i+1}.${t}`)
})

//deixar a letra maiscula
const nomesComMaisuculo =
nomes.map(t => t.toUpperCase())
console.log(nomesComMaisuculo)

//retornar lista com certa condição
const nomesComL =
nomes.filter(t => t.toLocaleLowerCase
    ().includes("l"))
console.log(nomesComL)

//encontra o caracter e devolve a posição 
const nomesFind =
nomes.find(t => t.toLocaleLowerCase
    ().includes("l"))
console.log(nomesFind)

//encontra o caracter e devolve a posição 
const IndiceNomeComL =
nomes.findIndex(t => t.toLocaleLowerCase
    ().includes("l"))
console.log(IndiceNomeComL)

//reduce soma com o anterior de caracteres da str e mostra o comprimento em caracteres
const somaComprimentos = 
nomes.reduce((total, t) => total+ t.length, 0)
console.log(somaComprimentos) */

// Criação de objeto usando sintaxe literal
/* const tarefa = {
  id: 1,
  titulo: "Aprender sobre objetos",
  descricao: "Estudar propriedades e métodos",
  concluida: false,
  prioridade: "alta",
  dataCriacao: new Date()
}

console.log(tarefa)
console.log(tarefa.titulo)

console.log(tarefa{"titulo"})

tarefa.dataCriacao  */

const projetoTaskMaster = {
  nome: "TaskMaster",
  version: "1.0",
  autor: "Curso JavaScript",
  tarefas: [],
  adicionarTarefa(titulo, prioridade = "média") {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      titulo,
      prioridade,
      concluida: false,
      criada: new Date()
    };