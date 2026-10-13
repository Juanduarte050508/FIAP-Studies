# React – Estado e Hooks Básicos (useState e useEffect)

> Explicação simples da aula, como se você estivesse aprendendo isso pela primeira vez.

---

## 1. Antes de tudo: o que é "estado"?

Imagina que um componente React é uma **caixa que lembra de coisas**.

Por exemplo: um contador que mostra "0 cliques". Quando você clica, ele precisa **lembrar** que agora são "1 clique". Essa "memória" do componente é o **estado**.

- O estado vive **dentro** do componente (não é uma variável global que todo mundo vê).
- Toda vez que o estado muda, o React **redesenha a tela** (re-renderiza) mostrando o valor novo.
- Pensa assim: **a tela é sempre um reflexo do estado atual**. Se o estado muda, a tela muda.

---

## 2. O que são Hooks?

Hooks são **funções especiais do React** que sempre começam com a palavra `use` (ex: `useState`, `useEffect`).

Eles existem para dar "superpoderes" a componentes de função — como guardar memória (estado) ou reagir a eventos (efeitos) — coisas que antigamente só dava pra fazer com componentes de classe (um jeito mais complicado de escrever).

**Analogia:** Hooks são como **acessórios que você pluga no seu componente**. Precisa de memória? Pluga `useState`. Precisa fazer algo quando a tela carrega? Pluga `useEffect`.

### Regras de ouro dos Hooks
1. Só chame hooks **no topo** do componente — nunca dentro de `if`, `for` ou funções aninhadas.
2. Só chame hooks dentro de **componentes React** ou de outros hooks customizados.
3. A **ordem** que os hooks aparecem no código não pode mudar entre uma renderização e outra.

```jsx
// ✅ CERTO
function Exemplo() {
  const [x, setX] = useState(0);
  return <div />;
}

// ❌ ERRADO — hook dentro de condicional
function Errado() {
  if (Math.random() > 0.5) {
    const [x, setX] = useState(0); // NÃO FAÇA ISSO
  }
  return <div />;
}
```

---

## 3. `useState` — a memória do componente

`useState` te dá **duas coisas**: o valor atual e uma função para mudar esse valor.

```jsx
const [valor, setValor] = useState(0);
//     ↑         ↑                ↑
//  valor    função pra        valor
//  atual    atualizar         inicial
```

- `valor` → o dado guardado agora.
- `setValor(...)` → a única forma "correta" de mudar esse dado. (Nunca mude o valor diretamente!)
- `useState(0)` → o `0` é o valor inicial, só usado na primeira vez.

### Exemplo: Contador

```jsx
import { useState } from 'react';

export default function Contador() {
  const [valor, setValor] = useState(0);

  function incrementar() {
    setValor(valor + 1);
  }

  return (
    <div>
      <p>Valor: {valor}</p>
      <button onClick={incrementar}>Adicionar</button>
    </div>
  );
}
```

Toda vez que o botão é clicado, `setValor` é chamado → o React percebe que o estado mudou → redesenha a tela com o novo número.

### 3.1 Atualização "funcional" (quando depende do valor anterior)

Se você faz **várias atualizações seguidas**, é mais seguro usar essa forma:

```jsx
setValor(prev => prev + 1);
```

Em vez de dizer "o novo valor é X", você diz **"pegue o valor anterior (`prev`) e some 1"**. Isso evita bugs quando o React ainda não atualizou o valor "oficial".

### 3.2 Objetos e arrays: nunca mude direto (imutabilidade)

```jsx
const [aluno, setAluno] = useState({ nome: 'Ana', pontos: 0 });

// ❌ ERRADO — está mudando o objeto original
aluno.pontos = aluno.pontos + 1;
setAluno(aluno);

// ✅ CERTO — cria uma cópia nova com o valor atualizado
setAluno(prev => ({ ...prev, pontos: prev.pontos + 1 }));
```

O `...prev` "espalha" tudo que já existia no objeto, e depois você sobrescreve só o que precisa mudar. É como fotocopiar um documento e só rabiscar a parte nova, em vez de rasurar o original.

O mesmo vale para listas:

```jsx
const [lista, setLista] = useState(['A', 'B']);
setLista(prev => [...prev, 'C']); // adiciona 'C' sem destruir a lista original
```

### 3.3 Inputs controlados

Um "input controlado" é quando o valor do campo de texto é **controlado pelo estado**, não pelo navegador.

```jsx
function FormNome() {
  const [nome, setNome] = useState('');

  return (
    <div>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome" />
      <p>Olá, {nome || 'Visitante'}!</p>
    </div>
  );
}
```

Cada letra digitada dispara `onChange` → atualiza o estado `nome` → a tela mostra o texto atualizado. O input e o estado ficam sempre sincronizados.

---

## 4. `useEffect` — fazer algo em resposta a alguma coisa

`useEffect` serve para **efeitos colaterais**: coisas que acontecem "fora" da renderização normal, como:
- Buscar dados de uma API
- Criar um timer (`setInterval`)
- Escutar eventos do teclado/mouse
- Sincronizar com o `localStorage`

```jsx
useEffect(() => {
  // código que roda
  return () => {
    // (opcional) código de limpeza, roda quando o componente "morre"
  };
}, [dependencias]);
```

### As 3 formas de usar o array de dependências

| Forma | Quando roda |
|---|---|
| **sem array** — `useEffect(() => {...})` | Toda vez que o componente renderiza (cuidado, pode causar loop!) |
| **array vazio** — `useEffect(() => {...}, [])` | Só uma vez, quando o componente "nasce" na tela |
| **com valores** — `useEffect(() => {...}, [nome])` | Toda vez que `nome` mudar |

### Exemplo: Relógio que atualiza sozinho

```jsx
import { useState, useEffect } from 'react';

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(id); // limpa o timer quando o componente sai da tela
  }, []); // roda uma vez só

  return <p>{hora.toLocaleTimeString()}</p>;
}
```

**Por que a limpeza (`return () => ...`) importa?** Se você não limpar o `setInterval`, ele continua rodando "escondido" mesmo depois que o componente some da tela — isso é um vazamento de memória (*memory leak*).

### Exemplo: buscando dados de uma API

```jsx
function Usuarios() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(json => { if (ativo) { setDados(json); setCarregando(false); } })
      .catch(e => { if (ativo) { setErro(e.message); setCarregando(false); } });
    return () => { ativo = false; }; // evita atualizar estado se o componente já saiu da tela
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <ul>
      {dados.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

A variável `ativo` é um truque comum: evita que o código tente atualizar o estado de um componente que já não existe mais na tela (isso gera aviso/erro no React).

---

## 5. Resumindo tudo em 4 frases

1. **`useState`** = a memória do componente. Guarda um valor e te dá uma função para mudá-lo.
2. **`useEffect`** = "quando isso mudar (ou quando a tela abrir), faça aquilo". Serve para buscar dados, timers, eventos.
3. **Nunca mude estado direto** (nem objeto, nem array) — sempre crie uma cópia nova.
4. **Hooks só no topo do componente**, sempre na mesma ordem.

---

## 6. Índice dos exercícios desta aula

Cada exercício está em um arquivo separado, seguindo a estrutura que o professor usou na lousa (`componentes/`):

| Arquivo | Exercício | O que pratica |
|---|---|---|
| `componentes/Contador.js` | Contador (exemplo da aula) | `useState`, atualização funcional |
| `Exercicio1Contador.jsx` | Contador com +1 / -1 | `useState`, atualização funcional |
| `Exercicio2Relogio.jsx` | Relógio ao vivo | `useEffect`, `setInterval`, limpeza |
| `Exercicio3InputControlado.jsx` | Campo de texto controlado | `useState`, input controlado |
| `Exercicio4TodoSimples.jsx` | Lista de tarefas (To-Do) | `useState` com array, `map()` |
| `Exercicio5Timer.jsx` | Cronômetro Iniciar/Pausar/Reset | `useState` + `useEffect` juntos |
| `Exercicio6TemaClaroEscuro.jsx` | Alternar tema com `localStorage` | `useEffect` + persistência |
| `Exercicio7BuscaAPI.jsx` | Busca de usuários com loading/erro | `useEffect` + `fetch` + estados de carregamento |

---

## 7. Quiz rápido (para revisar sozinho)

1. Onde podemos chamar hooks como `useState` e `useEffect`?
   → Em componentes de função e custom hooks.
2. Qual forma é mais segura quando a atualização depende do valor anterior?
   → `setX(prev => prev + 1)`.
3. O que faz o `return` dentro do `useEffect`?
   → É a função de limpeza (roda antes do efeito rodar de novo, ou quando o componente sai da tela).
4. Quando um efeito com `[nome]` como dependência é reexecutado?
   → Toda vez que `nome` mudar.
5. Qual opção **não** respeita imutabilidade?
   → `arr.push(10); setArr(arr)` — isso muda o array original em vez de criar uma cópia.
