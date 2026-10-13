// Exercício 6: Card com variação de estilo por prop
// Objetivo: alterar classe/estilo conforme uma prop (tipo: success | warning | info).

const CORES = {
  success: { bg: '#dcfce7', cor: '#166534', borda: '#22c55e' },
  warning: { bg: '#fef9c3', cor: '#854d0e', borda: '#eab308' },
  info: { bg: '#dbeafe', cor: '#1e40af', borda: '#3b82f6' },
};

function Badge({ tipo = 'info', children }) {
  const paleta = CORES[tipo] ?? CORES.info;

  return (
    <span
      className={`badge badge-${tipo}`}
      style={{
        display: 'inline-block',
        padding: '4px 10px',
        borderRadius: '999px',
        fontWeight: 600,
        fontSize: '0.85rem',
        backgroundColor: paleta.bg,
        color: paleta.cor,
        border: `1px solid ${paleta.borda}`,
      }}
    >
      {children}
    </span>
  );
}

export default function Exercicio6Badge() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge tipo="success">Sucesso</Badge>
      <Badge tipo="warning">Atenção</Badge>
      <Badge tipo="info">Info</Badge>
      <Badge>Padrão (info)</Badge>
    </div>
  );
}
