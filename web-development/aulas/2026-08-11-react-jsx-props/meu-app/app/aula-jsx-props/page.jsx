// Página que reúne todos os exercícios da aula de JSX Avançado, Componentes e Props.
// Rota: /aula-jsx-props

import Exercicio1Card from './components/Exercicio1Card';
import Exercicio2Lista from './components/Exercicio2Lista';
import Exercicio3Saudacao from './components/Exercicio3Saudacao';
import Exercicio4BotaoAcao from './components/Exercicio4BotaoAcao';
import Exercicio5ListaObjetos from './components/Exercicio5ListaObjetos';
import Exercicio6Badge from './components/Exercicio6Badge';
import Exercicio7Composicao from './components/Exercicio7Composicao';

function Secao({ titulo, children }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h3>{titulo}</h3>
      {children}
    </section>
  );
}

export default function AulaJsxPropsPage() {
  return (
    <main style={{ maxWidth: '720px', margin: '0 auto', padding: '32px' }}>
      <h1>React – JSX Avançado, Componentes e Props</h1>
      <p>Exercícios resolvidos da aula.</p>

      <Secao titulo="Exercício 1 — Card com children">
        <Exercicio1Card />
      </Secao>

      <Secao titulo="Exercício 2 — Lista de itens (map + key)">
        <Exercicio2Lista />
      </Secao>

      <Secao titulo="Exercício 3 — Saudação com props">
        <Exercicio3Saudacao />
      </Secao>

      <Secao titulo="Exercício 4 — Botão de ação (função como prop)">
        <Exercicio4BotaoAcao />
      </Secao>

      <Secao titulo="Exercício 5 — Lista de objetos com id como key">
        <Exercicio5ListaObjetos />
      </Secao>

      <Secao titulo="Exercício 6 — Badge com variação de estilo por prop">
        <Exercicio6Badge />
      </Secao>

      <Secao titulo="Exercício 7 (Desafio) — Composição Card/CardHeader/CardBody">
        <Exercicio7Composicao />
      </Secao>
    </main>
  );
}
