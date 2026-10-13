# React – useContext e Hooks Customizados

> Aula de 13/10/2026 · Web Development · FIAP

Nesta aula o projeto de contatos continua fazendo a mesma coisa, mas o código foi **reorganizado** (refatorado) com duas ferramentas: **Context** e **hooks customizados**.

## 1. O problema: prop drilling

No React os dados descem de pai para filho por **props**. Quando quem precisa do dado está vários níveis abaixo, os componentes do meio recebem a prop só para repassá-la:

```
HomePage          ← tem a função "remover"
  └── ContactList     ← não usa, só repassa
        └── ContactItem   ← é quem realmente usa
```

Isso é o **prop drilling**. É como passar um bilhete de mão em mão pela sala inteira até chegar no colega do fundo: quem está no meio não tem nada a ver com o recado, mas precisa participar.

## 2. A solução: Context

O Context funciona como um **mural de avisos**: a informação fica em um lugar só e qualquer componente vai lá e lê, sem depender de ninguém repassar.

Todo Context tem três partes:

| Parte | O que faz | No mural |
| --- | --- | --- |
| `createContext` | Cria o canal de comunicação | Pendurar o mural na parede |
| `Provider` | Componente que fornece os dados | Quem escreve no mural |
| `useContext` | Lê os dados dentro de um componente | Quem lê o mural |

Só enxerga os dados quem está **dentro** do Provider. Por isso ele fica no `layout.js`, envolvendo todas as páginas.

**Quando usar**

- ✅ Dados que muitos componentes precisam (lista de contatos, loading, erro)
- ✅ Configurações do app (tema, idioma, usuário logado)
- ❌ Estado que só um componente usa (`useState` resolve)
- ❌ Dados que mudam o tempo todo (causam muitas re-renderizações)

## 3. Hooks customizados

Um hook customizado é **uma função que começa com `use` e usa outros hooks dentro dela**. Serve para tirar a lógica de dentro do componente, que passa a cuidar só da tela.

É como guardar uma receita no caderno: em vez de reescrevê-la toda vez, você só consulta.

**Regras**

1. O nome precisa começar com `use`.
2. Só pode ser chamado no topo de um componente ou de outro hook, nunca dentro de `if` ou `for`.
3. Cada componente que chama o hook ganha **seu próprio estado**.

> **Diferença importante:** hook customizado compartilha a **lógica**. Context compartilha os **dados**.

## 4. O que foi criado na aula

| Arquivo | Responsabilidade |
| --- | --- |
| `ContactsContext` | Guarda contatos, loading, erro e status offline. Oferece as funções de carregar, adicionar, remover e buscar contato. |
| `useFilter` | Filtra a lista pelo texto digitado |
| `useStatistics` | Calcula total, com/sem email e com/sem telefone |
| `useConnectionStatus` | Detecta se está online ou offline |
| `useContactDetail` | Busca um contato pelo ID que está na URL |
| `useForm` | Controla os campos e o envio do formulário |

Cada pasta do projeto responde a uma pergunta:

| Pasta | Pergunta |
| --- | --- |
| `contexts/` | Quais dados o app inteiro precisa? |
| `hooks/` | Como isso funciona? |
| `components/` | Como isso aparece na tela? |
| `utils/` | Como falo com a API e o cache? |

## 5. O que ganhamos

- **Código mais limpo:** menos props, componentes mais curtos
- **Separação:** lógica em um lugar, tela em outro
- **Reutilização:** o mesmo hook serve em vários componentes
- **Manutenção:** mudou a API, só mexe no Context

## 6. Erros comuns

- **"deve ser usado dentro de ContactsProvider"** → o componente está fora do Provider.
- **Esquecer o `"use client"`** → hooks só funcionam em componentes de cliente no Next.
- **Achar que hook customizado compartilha estado** → cada chamada cria um estado novo.
- **Colocar tudo em um Context só** → quando um valor muda, todos que leem o Context renderizam de novo. Separe por assunto.
- **Usar `navigator` ou `localStorage` fora do `useEffect`** → o Next também renderiza no servidor, onde eles não existem.

## 7. Arquivos desta pasta

| Pasta | Conteúdo |
| --- | --- |
| [exemplos/](exemplos/) | O menor Context possível, com os 3 passos comentados |
| [codigo-aula/](codigo-aula/) | O Context e os 5 hooks da aula |
| [exercicios/](exercicios/) | 4 exercícios para praticar (enunciado dentro de cada arquivo) |
| [exercicios/solucoes/](exercicios/solucoes/) | Soluções dos exercícios |

## Glossário

| Termo | Significado |
| --- | --- |
| **Props** | Dados que o componente pai passa para o filho |
| **Estado global** | Dado acessível por qualquer componente |
| **Refatorar** | Reorganizar o código sem mudar o que ele faz |
| **Re-render** | O React redesenha o componente porque algo mudou |
| **`useMemo`** | Guarda o resultado de um cálculo até as dependências mudarem |
| **`useCallback`** | Guarda uma função para não recriá-la a cada renderização |
