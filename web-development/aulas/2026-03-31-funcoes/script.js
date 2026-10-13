/* // Função que exibe detalhes de uma tarefa
function exibirTarefa(id, titulo, prioridade) {
  console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}
exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
function criarTarefa(titulo, descricao = "Sem descrição", 
                     prioridade = "média", concluida = false) {
  return {
    id: Date.now(), // Gera um ID único com base no timestamp
    titulo,
    descricao,
    prioridade,
    concluida,
    criada: new Date()
  };
}

const tarefa = criarTarefa("Estudar funções");
console.log(tarefa); */

/* // Função que calcula estatísticas básicas de um array de números
function calcularEstatisticas(numeros) {
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { soma, media, min, max, numeros, quantidade: numeros.length};
}

const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);

const resultados2 = calcularEstatisticas([1, 2, 3, 4, 5]);

const resultados3 = calcularEstatisticas([2, 4, 6, 8, 10]);

console.log(resultados);
console.log(resultados2);
console.log(resultados3); */


// Demonstração de "this" em função tradicional vs. arrow function
const contador = {
  valor: 0,
  incrementarTradicional: function() {
    setTimeout(function() {
      // Neste caso, "this" não se refere ao objeto "contador"
      console.log("Valor (tradicional):", this.valor);
    }, 100);
  },
  incrementarArrow: function() {
    setTimeout(() => {
      // A arrow function preserva o contexto do objeto "contador"
      this.valor++;
      console.log("Valor (arrow):", this.valor);
    }, 100);
  }
};
contador.incrementarTradicional();
contador.incrementarArrow();