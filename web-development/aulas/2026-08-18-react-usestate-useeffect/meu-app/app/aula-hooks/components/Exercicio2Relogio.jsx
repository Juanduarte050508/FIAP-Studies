// Exercício 2: Relógio
// Objetivo: exibir a hora atualizada a cada segundo.
// - useEffect com setInterval que atualiza a hora
// - limpeza com clearInterval no retorno do efeito

'use client';

import { useState, useEffect } from 'react';

export default function Exercicio2Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // limpeza: evita o timer continuar rodando depois que o componente sai da tela
    return () => clearInterval(id);
  }, []); // array vazio: roda uma única vez, no mount

  return <p className="relogio">{hora.toLocaleTimeString()}</p>;
}
