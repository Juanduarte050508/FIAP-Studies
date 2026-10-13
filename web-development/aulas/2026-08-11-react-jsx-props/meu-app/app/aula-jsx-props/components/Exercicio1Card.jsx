// Exercício 1: Card Componente
// Objetivo: criar um componente reutilizável que utilize a prop children.

function Card({ children }) {
  return (
    <div
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      {children}
    </div>
  );
}

export default function Exercicio1Card() {
  return (
    <Card>
      <h2>Título do card</h2>
      <p>Este parágrafo veio como children para dentro do componente Card.</p>
    </Card>
  );
}
