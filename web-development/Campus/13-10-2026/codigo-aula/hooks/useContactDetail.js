"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useContactsContext } from "../contexts/ContactsContext";

export const useContactDetail = () => {
  const params = useParams(); // { id: "5" } vindo da URL /contact/5
  const { getContact } = useContactsContext();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        setError(null);
        setContact(await getContact(params.id));
      } catch (err) {
        setError(err.message || "Erro ao carregar contato");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchContact();
  }, [params.id, getContact]);

  return { contact, loading, error };
};
