# React – JSX Avançado, Componentes e Props

> "Props são como argumentos para funções, mas para componentes React." – React Documentation

## 1. Sintaxe avançada do JSX

- JSX precisa retornar **um único elemento pai**. Use `<>...</>` (Fragment) quando não quiser um `<div>` extra.
- Expressões JavaScript vão entre chaves `{ }`.
- Comentários em JSX: `{/* ... */}`.
- Atributos usam **camelCase**: `className`, `onClick`, `tabIndex`.
- `class` do HTML vira `className` no JSX.

```jsx
const nome = 'Ana';
function Hello() {
  return (
    <>
      <h1>Olá, {nome}!</h1>
      {nome === 'Ana' && <p>Que bom ver você aqui!</p>}
    </>
  );
}
```

### Condicionais: `&&` vs ternário

Cuidado: valores como `0` são renderizados na tela. Se a expressão puder virar `0`, prefira o ternário.

```jsx
const pontos = 0;
{pontos && 'Você tem pontos'}          // ⚠️ renderiza "0" na tela
{pontos > 0 ? 'Você tem pontos' : null} // ✅ correto
```

### Estilos inline e classes dinâmicas

```jsx
const ativo = true;
const estilo = { padding: '8px', borderRadius: '6px' };

<button
  style={estilo}
  className={ativo ? 'btn btn-primary' : 'btn btn-outline'}
>
  Botão
</button>
```

### Segurança

JSX escapa valores por padrão (proteção contra XSS). Só usar `dangerouslySetInnerHTML` quando souber exatamente o que está fazendo.

## 2. Componentes funcionais com arrow functions

Nome em **PascalCase**, sempre retornando JSX.

```jsx
// Retorno implícito
const Botao = ({ texto }) => <button>{texto}</button>;

// Retorno explícito (bloco)
const BotaoGrande = ({ texto }) => {
  return <button className="btn btn-lg">{texto}</button>;
};
```

### Desestruturação, valores padrão e rest props

```jsx
const Alerta = ({ tipo = 'info', children, ...rest }) => {
  const classe = `alert alert-${tipo}`;
  return <div className={classe} {...rest}>{children}</div>;
};
```

> Erro comum: esquecer o `return` quando usa chaves `{ }` no corpo da arrow function.

## 3. Passando dados com props

Props são **somente leitura** — fluem do pai para o filho.

```jsx
function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}
```

### Funções como props

```jsx
const BotaoAcao = ({ onAcao, children }) => (
  <button onClick={onAcao}>{children}</button>
);
```

## 4. Composição com `children`

`children` permite envolver conteúdo e criar layouts reutilizáveis (Card, CardHeader, CardBody etc.).

## 5. Renderizando listas e `key`

- Usar `map()` para gerar elementos a partir de um array.
- `key` deve ser **única e estável** — prefira um `id` do item em vez do índice do array (índice pode causar bugs em reordenações/remoções).

## 6. Hierarquia de componentes e boas práticas

- Quebrar componentes grandes em menores e reutilizáveis.
- Evitar **props drilling** (passar props por muitos níveis) — resolvido depois com Context API.
- Nomear props de evento com `onAlgo` e handlers com `handleAlgo`.
- Preferir dados imutáveis (não mutar arrays/objetos diretamente).

## Referências rápidas

- JSX: um pai, expressões em `{ }`, `className`, eventos em camelCase.
- Props: somente leitura, desestruturação e valores padrão na assinatura.
- `children`: composição e layouts reutilizáveis.
- Listas: `map()` + `key` estável (evitar índice).
- Condicionais: preferir ternário para evitar mostrar `0`.
