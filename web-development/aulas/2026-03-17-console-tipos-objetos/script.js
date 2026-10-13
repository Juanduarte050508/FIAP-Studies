// =====================
// CONSOLE
// =====================
console.log("Juan");
console.info("Informação");
console.warn("Aviso");
console.error("Erro");

// =====================
// TIPOS DE DADOS
// =====================
let texto = "Olá";
console.log("valor:", texto, "| tipo:", typeof texto);

let numero = 43;
console.log("valor:", numero, "| tipo:", typeof numero);

let isComplete = false;
console.log("valor:", isComplete, "| tipo:", typeof isComplete);

let semValor;
console.log("valor:", semValor, "| tipo:", typeof semValor);

let nulo = null;
console.log("valor:", nulo, "| tipo:", typeof nulo);

// Symbol
let uniqueId = Symbol("id");
console.log("tipo:", typeof uniqueId);
console.log(uniqueId);

// BigInt
let bigNumero = 93490293480293409238n;
console.log("valor:", bigNumero, "| tipo:", typeof bigNumero);

// =====================
// OBJETOS
// =====================
let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  }
};

// =====================
// ARRAY DE OBJETOS
// =====================
let tasks = [
  {
    id: 1,
    title: "Aprender JavaScript",
    completed: false,
    assignee: {
      name: "João",
      email: "joao@example.com"
    }
  },
  {
    id: 2,
    title: "Aprender Python",
    completed: false,
    assignee: {
      name: "João",
      email: "joao@example.com"
    }
  }
];

console.table(tasks);

// =====================
// DATAS
// =====================
let hoje = new Date();
console.log("Hoje:", hoje);

let amanha = new Date("2026-03-17"); // formato correto
console.log("Amanhã:", amanha);

// =====================
// REGEX (telefone)
// =====================
let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899"));  // false

// =====================
// CONVERSÕES
// =====================
console.log(Number("42"));
console.log(parseInt("42"));
console.log(parseFloat("42.2"));

// =====================
// OPERADORES
// =====================
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// =====================
// INCREMENTO
// =====================
let contador = 0;
console.log(++contador);
console.log(contador++);

// =====================
// GROUP / TIMER
// =====================
console.group("Grupo");
console.log("Linha 1");
console.log("Linha 2");
console.log("Linha 3");
console.groupEnd();

console.time("timer");

let casa = "";
if (casa === "casa") {
  console.log("oi");
}

console.log("oi");
console.timeEnd("timer");

// =====================
// VAR / LET / CONST
// =====================
var antigo = "antigo";
let username = "Ana";
const API_URL = "url";

// =====================
// TYPEOF EXTRA
// =====================
let frase = "olá";
let number = 43;
console.log(typeof frase + " usuário " + typeof number);

// =====================
// FINAL
// =====================
console.log(parseInt("52"));