import { useState, useMemo, useCallback } from "react";

export const useFilter = (contacts) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = useCallback((value) => {
    setFilter(value);
  }, []);

  // Só refaz o filtro quando "contacts" ou "filter" mudarem
  const filteredContacts = useMemo(() => {
    if (!filter.trim()) return contacts;

    return contacts.filter(
      (contact) =>
        contact.nome.toLowerCase().includes(filter.toLowerCase()) ||
        contact.email.toLowerCase().includes(filter.toLowerCase()) ||
        contact.telefone.includes(filter)
    );
  }, [contacts, filter]);

  return { filter, filteredContacts, handleFilterChange };
};
