// Exercício 1: Contador
// Objetivo: criar um contador que aumente e diminua o valor.
// - Implementar +1 e -1
// - Mostrar o valor atual em um <p>
// - Evitar valores negativos (opcional)

'use client';

import { useState } from 'react';

export default function Exercicio1Contador() {
  const [valor, setValor] = useState(0);

  function incrementar() {
    setValor((prev) => prev + 1);
  }

  function decrementar() {
    // evita valores negativos
    setValor((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <div className="contador">
      <button className="btn btn-outline" onClick={decrementar}>
        -1
      </button>
      <p>Valor: {valor}</p>
      <button className="btn btn-primary" onClick={incrementar}>
        +1
      </button>
    </div>
  );
}
