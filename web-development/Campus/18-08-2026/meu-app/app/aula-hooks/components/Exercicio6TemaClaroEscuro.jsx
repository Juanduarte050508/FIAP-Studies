// Exercício 6: Tema Claro/Escuro com persistência
// Objetivo: alternar tema e salvar no localStorage usando useEffect.
// - estado: tema = 'light' | 'dark'
// - ao mudar o tema, salvar em localStorage e aplicar uma classe no body
// - no mount, ler o valor salvo

'use client';

import { useState, useEffect } from 'react';

export default function Exercicio6TemaClaroEscuro() {
  const [tema, setTema] = useState('light');

  // no mount: lê o valor salvo no localStorage (se existir)
  useEffect(() => {
    const salvo = localStorage.getItem('tema');
    if (salvo === 'light' || salvo === 'dark') {
      setTema(salvo);
    }
  }, []);

  // sempre que o tema mudar: salva no localStorage e aplica a classe no body
  useEffect(() => {
    localStorage.setItem('tema', tema);
    document.body.classList.remove('tema-light', 'tema-dark');
    document.body.classList.add(tema === 'dark' ? 'tema-dark' : 'tema-light');
  }, [tema]);

  function alternarTema() {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <div>
      <p>Tema atual: {tema === 'dark' ? 'Escuro 🌙' : 'Claro ☀️'}</p>
      <button className="btn btn-primary" onClick={alternarTema}>
        Alternar tema
      </button>
    </div>
  );
}
