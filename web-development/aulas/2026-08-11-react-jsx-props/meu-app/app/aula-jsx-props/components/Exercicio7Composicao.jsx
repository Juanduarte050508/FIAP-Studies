// Exercício 7 (Desafio): Composição com Header e Body
// Objetivo: praticar children criando Card, CardHeader e CardBody.

function Card({ children }) {
  return (
    <div
      className="card"
      style={{ border: '1px solid #d1d5db', borderRadius: '8px' }}
    >
      {children}
    </div>
  );
}

function CardHeader({ children }) {
  return (
    <div
      className="card-header"
      style={{
        padding: '12px 16px',
        borderBottom: '1px solid #d1d5db',
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  );
}

function CardBody({ children }) {
  return (
    <div className="card-body" style={{ padding: '16px' }}>
      {children}
    </div>
  );
}

export default function Exercicio7Composicao() {
  return (
    <Card>
      <CardHeader>
        <h2 style={{ margin: 0 }}>Título</h2>
      </CardHeader>
      <CardBody>
        <p>Conteúdo enviado como children, dentro de um layout composto.</p>
      </CardBody>
    </Card>
  );
}
