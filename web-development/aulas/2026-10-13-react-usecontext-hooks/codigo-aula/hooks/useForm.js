"use client";
import { useEffect, useRef, useState } from "react";
import { useContactsContext } from "../contexts/ContactsContext";

export const useForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nomeInputRef = useRef(null);

  const { addContact, removeContact } = useContactsContext();

  // Coloca o cursor no campo "nome" ao abrir a tela
  useEffect(() => {
    nomeInputRef.current?.focus();
  }, []);

  // Um único handler para todos os campos: usa o atributo "name" do input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome.trim()) return;

    try {
      setLoading(true);
      setError(null);
      await addContact(form);
      setForm({ nome: "", email: "", telefone: "" });
      nomeInputRef.current?.focus();
    } catch (err) {
      setError("Erro ao adicionar contato");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeContact(id);
    } catch (err) {
      console.error("Erro ao remover contato:", err);
    }
  };

  return { form, loading, error, handleChange, handleSubmit, nomeInputRef, handleRemove };
};
