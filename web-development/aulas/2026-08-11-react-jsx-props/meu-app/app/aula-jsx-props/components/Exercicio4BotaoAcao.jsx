// Exercício 4: Botão de Ação
// Objetivo: passar uma função como prop e reagir a um clique.

const BotaoAcao = ({ onAcao, children }) => (
  <button onClick={onAcao}>{children}</button>
);

export default function Exercicio4BotaoAcao() {
  const dizerOi = () => alert('Oi!');

  return <BotaoAcao onAcao={dizerOi}>Clique aqui</BotaoAcao>;
}
