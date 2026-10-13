"use client";
import { createContext, useContext, useState } from "react";
import "../03-tema.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [tema, setTema] = useState("claro");
  const alternarTema = () => setTema((t) => (t === "claro" ? "escuro" : "claro"));

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  }
  return context;
};

const BotaoTema = () => {
  const { tema, alternarTema } = useTheme();
  return (
    <button onClick={alternarTema}>
      {tema === "claro" ? "🌙 Escuro" : "☀️ Claro"}
    </button>
  );
};

const Pagina = () => {
  const { tema } = useTheme();
  return (
    <div className={`pagina ${tema}`}>
      <h1>Meus contatos</h1>
      <BotaoTema />
    </div>
  );
};

// No projeto de contatos, basta um Provider dentro do outro no layout.js:
// <ThemeProvider><ContactsProvider>{children}</ContactsProvider></ThemeProvider>
export default function Exercicio3() {
  return (
    <ThemeProvider>
      <Pagina />
    </ThemeProvider>
  );
}
