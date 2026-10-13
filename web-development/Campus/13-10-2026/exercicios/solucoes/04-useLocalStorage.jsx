"use client";
import { useState, useEffect } from "react";

export const useLocalStorage = (chave, valorInicial) => {
  const [valor, setValor] = useState(valorInicial);

  // Lê o valor salvo (só no navegador, por isso dentro do useEffect)
  useEffect(() => {
    try {
      const salvo = localStorage.getItem(chave);
      if (salvo !== null) setValor(JSON.parse(salvo));
    } catch (err) {
      console.error("Erro ao ler o localStorage:", err);
    }
  }, [chave]);

  // Atualiza o estado e o localStorage juntos
  const salvar = (novoValor) => {
    setValor(novoValor);
    try {
      localStorage.setItem(chave, JSON.stringify(novoValor));
    } catch (err) {
      console.error("Erro ao salvar no localStorage:", err);
    }
  };

  // Sincroniza entre abas: o evento "storage" dispara nas OUTRAS abas
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key !== chave || e.newValue === null) return;
      try {
        setValor(JSON.parse(e.newValue));
      } catch (err) {
        console.error("Erro ao sincronizar o localStorage:", err);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [chave]);

  return [valor, salvar];
};

// Desafio 5 — no ThemeProvider do exercício 3, troque:
//   const [tema, setTema] = useState("claro");
//   const alternarTema = () => setTema((t) => (t === "claro" ? "escuro" : "claro"));
// por:
//   const [tema, setTema] = useLocalStorage("tema", "claro");
//   const alternarTema = () => setTema(tema === "claro" ? "escuro" : "claro");
export default function Exercicio4() {
  const [nome, setNome] = useLocalStorage("nome", "");

  return (
    <div>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome e aperte F5"
      />
      <p>Salvo: {nome}</p>
    </div>
  );
}
