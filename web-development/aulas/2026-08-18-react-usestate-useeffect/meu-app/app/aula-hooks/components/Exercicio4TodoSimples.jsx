// Exercício 4: To-Do simples
// Objetivo: adicionar itens em uma lista usando useState.
// - input + botão "Adicionar"
// - lista guardada em estado (array de strings)
// - listar itens com map() e uma key estável

'use client';

import { useState } from 'react';

export default function Exercicio4TodoSimples() {
  const [itemAtual, setItemAtual] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    const texto = itemAtual.trim();
    if (texto === '') return;

    // nunca muda o array direto: cria uma cópia nova com o item novo
    setTarefas((prev) => [...prev, { id: Date.now(), texto }]);
    setItemAtual('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') adicionarTarefa();
  }

  return (
    <div>
      <input
        className="input-texto"
        value={itemAtual}
        onChange={(e) => setItemAtual(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nova tarefa..."
      />
      <button className="btn btn-primary" onClick={adicionarTarefa} style={{ marginLeft: 8 }}>
        Adicionar
      </button>

      <ul className="todo-lista">
        {tarefas.map((tarefa) => (
          <li className="todo-item" key={tarefa.id}>
            {tarefa.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
