// Exercício 2: Lista de Itens
// Objetivo: renderizar uma lista de elementos a partir de um array.

const itens = ['React', 'Vue', 'Angular'];

export default function Exercicio2Lista() {
  return (
    <ul>
      {itens.map((framework) => (
        <li key={framework}>{framework}</li>
      ))}
    </ul>
  );
}
