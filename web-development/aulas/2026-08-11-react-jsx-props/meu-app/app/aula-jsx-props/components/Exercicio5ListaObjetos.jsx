// Exercício 5: Lista de Objetos com ID
// Objetivo: renderizar uma lista de objetos usando key estável (id, não índice).

const cursos = [
  { id: 101, nome: 'Lógica de Programação' },
  { id: 102, nome: 'Front-end' },
  { id: 103, nome: 'Back-end' },
];

export default function Exercicio5ListaObjetos() {
  return (
    <ol>
      {cursos.map((c) => (
        <li key={c.id}>{c.nome}</li>
      ))}
    </ol>
  );
}
