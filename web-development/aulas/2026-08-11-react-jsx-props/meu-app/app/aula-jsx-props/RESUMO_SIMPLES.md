# React – Entendendo JSX, Componentes e Props (explicado do zero)

Esse resumo assume que você não sabe nada disso ainda. Cada conceito
vem com uma explicação simples antes do código.

---

## 1. O que é JSX?

JSX é uma forma de escrever HTML **dentro** do JavaScript. Normalmente
HTML e JavaScript ficam separados, mas no React você mistura os dois
no mesmo arquivo. Isso permite que o JavaScript controle o que
aparece na tela de forma dinâmica.

```jsx
const nome = 'Ana';

function Hello() {
  return <h1>Olá, {nome}!</h1>;
}
```

Repare: `<h1>` é HTML, mas `{nome}` é JavaScript "encaixado" dentro
do HTML. É exatamente isso que o JSX permite.

### Regra 1: só pode "devolver" UMA coisa

Toda vez que você escreve algo que o React vai mostrar na tela
(chamamos isso de "retornar"), você só pode devolver **um** elemento
por fora. Não pode ter dois elementos "soltos" um do lado do outro.

❌ Isso dá erro:
```jsx
return (
  <h1>Título</h1>
  <p>Texto</p>
);
```

✅ Isso funciona, porque colocamos os dois dentro de UM elemento pai:
```jsx
return (
  <div>
    <h1>Título</h1>
    <p>Texto</p>
  </div>
);
```

✅ Se você não quer criar um `<div>` extra (às vezes ele atrapalha o
CSS), pode usar um "Fragmento", que é tipo um envelope invisível:
```jsx
return (
  <>
    <h1>Título</h1>
    <p>Texto</p>
  </>
);
```
`<>` e `</>` não aparecem na tela — servem só para "embrulhar" os
dois elementos e satisfazer a regra do "um elemento só".

### Regra 2: JavaScript vai entre chaves `{ }`

Sempre que você quiser colocar um valor do JavaScript (uma variável,
uma conta, um resultado) dentro do HTML, coloque entre `{ }`.

```jsx
const contagem = 3;

<p>Você tem {contagem} mensagens novas.</p>
```

Isso vai aparecer na tela como: **Você tem 3 mensagens novas.**

### Regra 3: comentários usam uma sintaxe diferente

Dentro do JSX, comentário normal do JavaScript (`//`) não funciona.
Você precisa escrever assim:

```jsx
{/* isso é um comentário dentro do JSX */}
```

### Regra 4: alguns nomes de atributos HTML mudam

No HTML normal você escreve `class="botao"`. No JSX, `class` é uma
palavra reservada do JavaScript, então o React usa `className` no
lugar:

```jsx
<button className="botao">Clique</button>
```

Outros atributos também mudam de estilo — em vez de `onclick`
(tudo minúsculo, como no HTML), no JSX é `onClick` (com "C"
maiúsculo). Essa forma de escrever com letras maiúsculas no meio da
palavra se chama **camelCase**, e o JSX usa isso na maioria dos
atributos.

### Mostrando ou escondendo algo na tela (condicional)

Às vezes você quer mostrar um texto só se uma condição for
verdadeira. Existem duas formas comuns:

**Forma 1 — usando `&&`** (funciona bem na maioria dos casos):
```jsx
const nome = 'Ana';

{nome === 'Ana' && <p>Que bom ver você aqui!</p>}
```
Tradução: "se `nome` for igual a 'Ana', mostre o parágrafo".

⚠️ **Cuidado com um detalhe chato**: se o valor que você está
testando puder ser o número `0`, essa forma dá problema, porque o
React acaba escrevendo o número **0** na tela sem querer:

```jsx
const pontos = 0;

{pontos && 'Você tem pontos'}
// Isso vai mostrar "0" escrito na tela! Não é o que você queria.
```

**Forma 2 — usando "ternário"** (mais segura para esse caso):
```jsx
const pontos = 0;

{pontos > 0 ? 'Você tem pontos' : null}
```
Tradução: "se `pontos` for maior que 0, mostre o texto; senão, não
mostre nada (`null`)". Essa forma evita o problema do "0 aparecendo
na tela".

### Colocando estilo (CSS) direto no elemento

Dá para escrever o CSS direto ali no JSX, usando um objeto
JavaScript:

```jsx
const estilo = { padding: '8px', borderRadius: '6px' };

<button style={estilo}>Botão</button>
```

Também dá para trocar a classe do CSS dependendo de uma condição:

```jsx
const ativo = true;

<button className={ativo ? 'btn-ligado' : 'btn-desligado'}>
  Botão
</button>
```
Tradução: "se `ativo` for verdadeiro, usa a classe 'btn-ligado';
senão, usa 'btn-desligado'".

---

## 2. O que é um "componente"?

Um componente é basicamente **um pedacinho de tela reutilizável**.
Em vez de copiar e colar o mesmo botão HTML várias vezes, você cria
"a receita" do botão uma vez (o componente) e usa ela quantas vezes
quiser.

Um componente, no fundo, é só uma função do JavaScript que devolve
JSX (HTML misturado com código):

```jsx
const Botao = ({ texto }) => <button>{texto}</button>;
```

Vamos destrinchar essa linha:
- `Botao` é o nome do componente. **Componentes sempre começam com
  letra maiúscula** (isso é uma regra do React, não é estilo — se
  você escrever `botao` minúsculo, o React vai achar que é uma tag
  HTML normal e vai dar erro).
- `({ texto })` é o "ingrediente" que esse componente recebe de fora
  (vamos falar mais sobre isso na seção de Props).
- `<button>{texto}</button>` é o que ele devolve — o botão de
  verdade, com o texto dentro.

Depois de criado, você usa o componente assim, como se fosse uma
tag HTML:

```jsx
<Botao texto="Salvar" />
<Botao texto="Cancelar" />
```

Isso cria dois botões diferentes, reaproveitando a mesma receita.

### Duas formas de escrever a mesma coisa

```jsx
// Forma curta (uma linha, sem chaves, sem "return")
const Botao = ({ texto }) => <button>{texto}</button>;

// Forma longa (com chaves e "return" explícito)
const BotaoGrande = ({ texto }) => {
  return <button className="btn-grande">{texto}</button>;
};
```

As duas fazem a mesma coisa. A forma longa é útil quando você precisa
escrever mais de uma linha de código antes de devolver o JSX (por
exemplo, fazer uma conta antes).

⚠️ **Erro muito comum**: se você usar a forma longa (com chaves `{ }`)
e esquecer de escrever a palavra `return`, o componente não mostra
nada na tela e não dá nenhum aviso claro do motivo.

---

## 3. O que são "Props"?

"Props" é abreviação de **properties** (propriedades). É como você
manda informação de fora para dentro de um componente — parecido
com passar um ingrediente para uma receita.

```jsx
function Saudacao({ nome, dia }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}
```

Aqui, `nome` e `dia` são as "props" que esse componente espera
receber. Você entrega esses valores assim, igual a atributos de
HTML:

```jsx
<Saudacao nome="Maria" dia="hoje" />
```

Isso vai gerar na tela: **Olá, Maria! Como vai hoje?**

### Valor padrão (caso ninguém envie nada)

E se alguém usar `<Saudacao />` sem passar `nome` nem `dia`? Dá para
definir um valor "reserva" para esses casos:

```jsx
function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}

<Saudacao />
// Como não veio nada, usa os valores padrão:
// "Olá, Visitante! Como vai hoje?"
```

### Regra importante: Props são só para LER, não para mudar

Um componente **nunca** deve alterar as props que recebeu. Pense
assim: as props são um "empréstimo" — você pode usar, mas não pode
modificar e devolver diferente. Se o componente pai quiser mudar
algo, ele mesmo muda e manda a versão nova.

### Você também pode mandar uma FUNÇÃO como prop

Não é só texto ou número que pode ser uma prop — uma função também
pode:

```jsx
const BotaoAcao = ({ onAcao, children }) => (
  <button onClick={onAcao}>{children}</button>
);

function App() {
  const dizerOi = () => alert('Oi!');

  return <BotaoAcao onAcao={dizerOi}>Clique aqui</BotaoAcao>;
}
```

Tradução: o componente `App` criou uma função chamada `dizerOi` e
"emprestou" ela para o `BotaoAcao` através da prop `onAcao`. Quando
alguém clicar no botão, a função `dizerOi` é executada.

Isso é o jeito do React fazer um componente "avisar" o componente
pai que algo aconteceu (nesse caso, um clique).

---

## 4. O que é `children`?

`children` é uma prop especial que representa **tudo que você
colocou entre as tags de abertura e fechamento** de um componente.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

E usando:
```jsx
<Card>
  <h2>Título</h2>
  <p>Algum texto aqui.</p>
</Card>
```

Nesse exemplo, o `<h2>` e o `<p>` são o `children` do `Card`. O
componente `Card` não sabe (e nem precisa saber) o que tem dentro
dele — ele só sabe que precisa "encaixar" esse conteúdo em algum
lugar (nesse caso, dentro da `<div className="card">`).

Isso é ótimo para criar "moldes" reutilizáveis, tipo uma caixa
decorada onde você pode colocar qualquer coisa dentro.

---

## 5. Mostrando uma lista de itens

Se você tem uma lista de coisas (um array) e quer mostrar cada uma
delas na tela, usa o método `.map()` do JavaScript, que "transforma"
cada item do array em um elemento JSX:

```jsx
const itens = ['React', 'Vue', 'Angular'];

<ul>
  {itens.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul>
```

Isso vai gerar uma lista com 3 itens `<li>`.

### O que é essa `key`?

Toda vez que você cria vários elementos com `.map()`, o React exige
que cada um tenha uma "etiqueta" única chamada `key`. Isso ajuda o
React a saber qual item é qual, principalmente quando a lista muda
(algum item é adicionado, removido ou reordenado).

⚠️ **Evite usar a posição do item (índice) como key.** Prefira usar
algo que realmente identifica aquele item de forma única, como um
`id`:

```jsx
const cursos = [
  { id: 101, nome: 'Lógica de Programação' },
  { id: 102, nome: 'Front-end' },
];

<ul>
  {cursos.map((curso) => (
    <li key={curso.id}>{curso.nome}</li>
  ))}
</ul>
```

Usar o índice como key pode causar bugs esquisitos (tipo o item
errado sendo apagado) quando a lista muda de ordem — por isso prefira
sempre um `id` de verdade.

---

## 6. Organizando vários componentes juntos

É normal ter um componente "de fora" que só serve para organizar
outros componentes "de dentro":

```jsx
function Header() {
  return <h1>Meu App</h1>;
}

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

function App() {
  return (
    <Layout>
      <Header />
      <p>Conteúdo principal</p>
    </Layout>
  );
}
```

Boas práticas para não se perder conforme o projeto cresce:

- **Quebre componentes grandes em pedaços menores.** Se um
  componente está fazendo muita coisa, provavelmente ele deveria
  virar dois ou três componentes separados.
- **Evite "props drilling".** Isso é quando você precisa passar uma
  prop por vários componentes só para ela chegar lá no fundo, mesmo
  que os componentes do meio nem usem esse valor. É um sinal de que
  talvez exista uma forma melhor de organizar (isso é resolvido mais
  pra frente com algo chamado "Context API").
- **Nomeie de forma consistente**: props que representam um evento
  (tipo "quando o usuário clicar") começam com `on` (ex: `onAcao`,
  `onClick`); as funções que tratam esse evento começam com `handle`
  (ex: `handleClique`).
- **Não altere diretamente arrays e objetos.** Sempre que for
  "mudar" uma lista ou objeto, crie uma cópia nova em vez de
  modificar o original.

---

## Resumo rápido (cola de estudo)

| Conceito | O que é | Como usar |
|---|---|---|
| JSX | HTML misturado com JavaScript | `<h1>{variavel}</h1>` |
| Fragment | "Envelope" invisível para agrupar elementos | `<>...</>` |
| Componente | Pedaço de tela reutilizável | função que começa com Maiúscula e devolve JSX |
| Props | Informação que entra "de fora" no componente | `<Componente prop="valor" />` |
| children | O conteúdo colocado entre as tags do componente | `<Componente>conteúdo aqui</Componente>` |
| map() + key | Gerar uma lista de elementos a partir de um array | `array.map(item => <li key={item.id}>...</li>)` |
| Ternário | Forma segura de mostrar algo condicionalmente | `condicao ? 'sim' : 'não'` |
