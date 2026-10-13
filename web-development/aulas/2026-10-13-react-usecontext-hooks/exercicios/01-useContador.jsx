"use client";
import { useState } from "react";

/*
  EXERCÍCIO 1 — Hook useContador ⭐

  1. Complete o hook useContador(valorInicial) para devolver:
     valor, incrementar, decrementar e resetar.
  2. Use o hook no componente Contador, com três botões.
  3. Coloque dois <Contador /> na página e clique em um deles.
     O outro muda? Por quê?
*/

export const useContador = (valorInicial = 0) => {
  // TODO: crie o estado e as três funções

  return {};
};

const Contador = () => {
  // TODO: use o hook aqui

  return (
    <div>
      <p>Valor: ?</p>
      {/* TODO: botões -, Resetar e + */}
    </div>
  );
};

export default function Exercicio1() {
  return (
    <>
      <Contador />
      <Contador />
    </>
  );
}
