"use client";
import { useState, useEffect } from "react";

/*
  EXERCÍCIO 4 — Hook useLocalStorage ⭐⭐⭐

  Crie useLocalStorage(chave, valorInicial), que funciona igual ao useState,
  mas guarda o valor no localStorage para ele sobreviver ao F5.

  1. Ao montar, leia o valor salvo (dentro de um useEffect!).
  2. Ao salvar, atualize o estado e o localStorage.
  3. Use try/catch: o localStorage pode falhar.
  4. Desafio: sincronize entre abas com o evento "storage" do window.
  5. Desafio: use este hook no ThemeContext do exercício 3
     para o tema continuar salvo depois de recarregar a página.

  Dica: o localStorage só guarda texto. Use JSON.stringify e JSON.parse.
*/

export const useLocalStorage = (chave, valorInicial) => {
  // TODO

  return [];
};

export default function Exercicio4() {
  const [nome, setNome] = useLocalStorage("nome", "");

  return (
    <div>
      <input
        value={nome ?? ""}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome e aperte F5"
      />
      <p>Salvo: {nome}</p>
    </div>
  );
}
