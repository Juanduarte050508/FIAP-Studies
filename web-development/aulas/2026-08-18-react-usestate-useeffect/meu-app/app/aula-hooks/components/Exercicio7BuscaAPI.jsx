// Exercício 7 (Desafio): Busca em API com Loading/Erro
// Objetivo: exibir usuários de uma API simulando estados de carregamento e erro.
// - estados: dados, carregando, erro
// - fetch no mount; trata erro e finaliza o carregamento
// - lista os nomes quando carregar

'use client';

import { useState, useEffect } from 'react';

export default function Exercicio7BuscaAPI() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true; // evita atualizar estado se o componente já saiu da tela

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then((json) => {
        if (ativo) {
          setDados(json);
          setCarregando(false);
        }
      })
      .catch((e) => {
        if (ativo) {
          setErro(e.message);
          setCarregando(false);
        }
      });

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) return <p className="estado-carregando">Carregando...</p>;
  if (erro) return <p className="estado-erro">Erro: {erro}</p>;

  return (
    <ul className="usuarios-lista">
      {dados.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
