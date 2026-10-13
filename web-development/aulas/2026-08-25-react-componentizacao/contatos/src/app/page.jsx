
"use client";
import { useState } from "react";
import QualquerCoisa from "./components/ContactForm"

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome.trim()) return;
    setContacts((prev) => [...prev, { ...form, id: Date.now() }]);
    setForm({ nome: "", email: "", telefone: "" });
  };

  const handleRemove = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Cadastro de Contatos
          </h1>
        </header>

        {/* ===== FORMULÁRIO ===== */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded p-4 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Nome
            </label>
            <input
              name="nome"
              className="w-full border rounded px-3 py-2 text-gray-900"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="w-full border rounded px-3 py-2 text-gray-900"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Telefone
            </label>
            <input
              name="telefone"
              className="w-full border rounded px-3 py-2 text-gray-900"
              value={form.telefone}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Adicionar Contato
          </button>
        </form>

        {/* ===== LISTA DE CONTATOS ===== */}
        <section className="bg-white shadow rounded">
          <div className="px-4 py-3 border-b">
            <h2 className="font-medium text-gray-900">
              Contatos ({contacts.length})
            </h2>
          </div>
          <ul className="divide-y">
            {contacts.length === 0 ? (
              <li className="p-4 text-gray-500">Nenhum contato encontrado</li>
            ) : (
              contacts.map((c) => (
                <li key={c.id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{c.nome}</p>
                    <p className="text-sm text-gray-600">
                      {c.email} • {c.telefone}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(c.id)}
                    className="text-red-600 hover:text-red-700 px-2 py-1 rounded"
                  >
                    Excluir
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
