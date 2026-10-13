// Exercício 3: Campo de Texto Controlado
// Objetivo: criar um input controlado e mostrar o texto digitado.
// - estado `texto` ligado ao value do input
// - atualizar com onChange e exibir o texto em um parágrafo
// - mostrar também a contagem de caracteres

'use client';

import { useState } from 'react';

export default function Exercicio3InputControlado() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        className="input-texto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <p>Você digitou: {texto || '(nada ainda)'}</p>
      <p className="contagem-caracteres">{texto.length} caracteres</p>
    </div>
  );
}
