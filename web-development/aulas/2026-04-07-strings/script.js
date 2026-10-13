/* // Criação de strings
let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';

console.log("Título:", titulo);
console.log("Descrição:", descricao);

// Comprimento da string
console.log("Comprimento do título:", titulo.length); */

/* let titulo = "Aprender JavaScript";

// Acesso a caracteres individuais
console.log("Primeiro caractere:", titulo[0]);

console.log("Último caractere:", titulo[titulo.length - 1]);

console.log("Caractere na posição 8:", titulo.charAt(8)); */


// Concatenação tradicional

let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';
let categoria = "Estudo";

/* let infoCompleta = "Categoria: " + categoria + " - " + titulo;
console.log("Concatenação tradicional:", infoCompleta);
 */
/* let resumo = `Tarefa: ${titulo} (${categoria})
Criada em: ${dataCriacao}
Descrição: ${descricao}`;
console.log("Template string:");
console.log(resumo); */

/* console.log("Posiçao de 'JavaScript': ", titulo.indexOf("JavaScript"));

console.log("'JavaScript' está presente?:", titulo.includes("JavaScript"));

console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));

console.log("Termina com 'Script'?", titulo.endsWith("Script")); */
/* 
const truncarDescricao = (texto, maxLength = 30) => {
    if (texto.length <= maxLength) {
    return texto;
  }
  return `${texto.substring(0, maxLength)}...`;
}

let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";


console.log(`Variavel original:${descricaoLonga.length}`)
console.log(`Variavel truncada:${descricaoLonga.length}`) */

let texto = "JavaScript é incrível!";

console.log("Original:", texto);

console.log("slice(0, 10):", texto.slice(0, 10));      // "JavaScript"
console.log("substring(0, 10):", texto.substring(0, 10)); // "JavaScript"