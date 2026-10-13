"use client";
import { useState } from "react";

export const useContador = (valorInicial = 0) => {
  const [valor, setValor] = useState(valorInicial);

  const incrementar = () => setValor((v) => v + 1);
  const decrementar = () => setValor((v) => v - 1);
  const resetar = () => setValor(valorInicial);

  return { valor, incrementar, decrementar, resetar };
};

const Contador = () => {
  const { valor, incrementar, decrementar, resetar } = useContador(10);

  return (
    <div>
      <p>Valor: {valor}</p>
      <button onClick={decrementar}>-</button>
      <button onClick={resetar}>Resetar</button>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

// Resposta da pergunta 3: o outro contador NÃO muda.
// Cada componente que chama useContador() ganha o seu próprio useState.
// O hook reaproveita a lógica, não os dados. Para os dois mostrarem
// o mesmo número, o estado teria que estar em um Context.
export default function Exercicio1() {
  return (
    <>
      <Contador />
      <Contador />
    </>
  );
}
