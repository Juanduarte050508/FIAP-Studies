"use client";
import { createContext, useContext, useState } from "react";

/*
  EXERCÍCIO 3 — ThemeContext (tema claro/escuro) ⭐⭐

  1. Complete o ThemeProvider: ele deve guardar o tema ("claro" ou "escuro")
     e oferecer a função alternarTema.
  2. Complete o hook useTheme (lance um erro se for usado fora do Provider).
  3. No BotaoTema, troque o tema ao clicar.
  4. Na Pagina, mude a classe da div conforme o tema.
     As classes já estão prontas no arquivo 03-tema.css.

  Modelo para consultar: ../exemplos/UsuarioContext.jsx
*/

import "./03-tema.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // TODO: estado + alternarTema

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  // TODO
};

const BotaoTema = () => {
  // TODO
  return <button>Trocar tema</button>;
};

const Pagina = () => {
  // TODO: use "pagina claro" ou "pagina escuro"
  return (
    <div className="pagina claro">
      <h1>Meus contatos</h1>
      <BotaoTema />
    </div>
  );
};

export default function Exercicio3() {
  return (
    <ThemeProvider>
      <Pagina />
    </ThemeProvider>
  );
}
