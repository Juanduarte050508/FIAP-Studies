"use client";
import { useState } from "react";

/*
  EXERCÍCIO 2 — Hook useToggle ⭐

  1. Complete o hook useToggle(inicial) para devolver [ligado, alternar].
     "alternar" troca true por false e vice-versa.
  2. Use o hook no CampoSenha para mostrar/esconder a senha
     (dica: troque o type do input entre "password" e "text").
*/

export const useToggle = (inicial = false) => {
  // TODO

  return [];
};

export default function CampoSenha() {
  // TODO: use o hook aqui

  return (
    <div>
      <input type="password" placeholder="Senha" />
      <button type="button">Mostrar</button>
    </div>
  );
}
