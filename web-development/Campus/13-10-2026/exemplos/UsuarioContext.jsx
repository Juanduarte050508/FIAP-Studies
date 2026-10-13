"use client";
import { createContext, useContext, useState } from "react";

// PASSO 1 — Criar o Context (o "mural" vazio)
const UsuarioContext = createContext();

// PASSO 2 — Criar o Provider (quem escreve no mural)
export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = useState("Visitante");

  return (
    <UsuarioContext.Provider value={{ nome, setNome }}>
      {children}
    </UsuarioContext.Provider>
  );
};

// PASSO 3 — Criar um hook para ler o mural
export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("useUsuario deve ser usado dentro de UsuarioProvider");
  }
  return context;
};

// USO — os dois componentes são irmãos e não trocam nenhuma prop
const Cabecalho = () => {
  const { nome } = useUsuario();
  return <h1>Olá, {nome}!</h1>;
};

const EditarNome = () => {
  const { nome, setNome } = useUsuario();
  return <input value={nome} onChange={(e) => setNome(e.target.value)} />;
};

export default function Exemplo() {
  return (
    <UsuarioProvider>
      <Cabecalho />
      <EditarNome />
    </UsuarioProvider>
  );
}
