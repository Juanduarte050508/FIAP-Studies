// Exercício 3: Saudação com Props
// Objetivo: praticar o uso de props criando várias saudações personalizadas.

function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return (
    <h2>
      Olá, {nome}! Como vai {dia}?
    </h2>
  );
}

export default function Exercicio3Saudacao() {
  const nomes = ['Maria', 'João', 'Aline'];

  return (
    <>
      <Saudacao nome="Maria" dia="essa manhã" />
      <Saudacao /> {/* Visitante, hoje - usa os valores padrão */}
      {nomes.map((n) => (
        <Saudacao key={n} nome={n} dia="agora" />
      ))}
    </>
  );
}
