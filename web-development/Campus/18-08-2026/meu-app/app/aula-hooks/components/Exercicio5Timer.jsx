// Exercício 5: Timer com Iniciar/Pausar/Reset
// Objetivo: criar um cronômetro que conte segundos com controle por botões.
// - estados: segundos e rodando (boolean)
// - se rodando for true, inicia um setInterval em um useEffect
// - botões: Iniciar / Pausar / Reset

'use client';

import { useState, useEffect } from 'react';

export default function Exercicio5Timer() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);

  useEffect(() => {
    if (!rodando) return; // se não estiver rodando, não cria o timer

    const id = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [rodando]); // reexecuta sempre que "rodando" mudar

  function iniciar() {
    setRodando(true);
  }

  function pausar() {
    setRodando(false);
  }

  function resetar() {
    setRodando(false);
    setSegundos(0);
  }

  return (
    <div>
      <p className="timer-display">{segundos}s</p>
      <div className="timer-controles">
        <button className="btn btn-primary" onClick={iniciar}>
          Iniciar
        </button>
        <button className="btn btn-outline" onClick={pausar}>
          Pausar
        </button>
        <button className="btn" onClick={resetar}>
          Reset
        </button>
      </div>
    </div>
  );
}
