// Exemplo da aula (lousa do professor)
// Objetivo: primeiro contato com useState — guardar e atualizar um número.

'use client';

import { useState } from 'react';

export default function Contador() {
  const [valor, setValor] = useState(0);

  function incrementar() {
    // atualização funcional: mais segura quando depende do valor anterior
    setValor((prev) => prev + 1);
  }

  function decrementar() {
    setValor((prev) => prev - 1);
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
