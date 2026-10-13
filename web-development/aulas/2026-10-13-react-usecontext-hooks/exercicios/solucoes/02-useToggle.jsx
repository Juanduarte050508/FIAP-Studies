"use client";
import { useState, useCallback } from "react";

export const useToggle = (inicial = false) => {
  const [ligado, setLigado] = useState(inicial);
  const alternar = useCallback(() => setLigado((v) => !v), []);
  return [ligado, alternar];
};

export default function CampoSenha() {
  const [visivel, alternar] = useToggle();

  return (
    <div>
      <input type={visivel ? "text" : "password"} placeholder="Senha" />
      <button type="button" onClick={alternar}>
        {visivel ? "Esconder" : "Mostrar"}
      </button>
    </div>
  );
}
