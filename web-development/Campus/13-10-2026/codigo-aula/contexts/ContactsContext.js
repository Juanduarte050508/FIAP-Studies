"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "../utils/api";
import { cacheService } from "../utils/cache";


//1. Criar o context

const ContactsContext = createContext();

//2. Hook customizado para o Context
export const useContactsContext = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContactsContext deve ser usado dentro de ContactsProvider");
  }
  return context;
};

//3. Provider components

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]); //Contatos
  const [loading, setLoading] = useState(true); // Loading
  const [error, setError] = useState(null); // Error
  const [isOffline, setIsOffline] = useState(false);

  const loadContacts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Verificar cache primeiro
      const cachedContacts = cacheService.get();
      if (cachedContacts) {
        setContacts(cachedContacts);
        setLoading(false);
      }

      // Tentar carregar da API
      try {
        const response = await api.get("/contacts");

        // Salvar no cache service
        cacheService.set(response.data);
        setContacts(response.data);
        setIsOffline(false);
      } catch (apiError) {
        // Se API falhar e não há cache, mostrar erro
        setIsOffline(true);
        if (!cachedContacts) {
          setError("Erro ao carregar contatos e sem cache disponível.");
        }
      }
    } catch (err) {
      setError("Erro ao carregar contatos");
    } finally {
      setLoading(false);
    }
  }, []);

  const addContact = useCallback(async (newContact) => {
    let contactWithId;
    try {
      // Tentar salvar via API primeiro
      const response = await api.post("/contacts", newContact);
      contactWithId = { ...newContact, id: response.data.id };
    } catch (apiError) {
      // Se API falhar, salvar localmente
      contactWithId = { ...newContact, id: Date.now() };
    }

    setContacts((prev) => {
      const updated = [...prev, contactWithId];
      cacheService.set(updated);
      return updated;
    });
    return contactWithId;
  }, []);

  const removeContact = useCallback(async (id) => {
    try {
      // Tentar excluir via API primeiro
      await api.delete(`/contacts/${id}`);
    } catch (apiError) {
      // Se API falhar, apenas remover localmente
      console.log("API offline, removendo apenas localmente");
    }

    // Remover da lista local em ambos os casos
    setContacts((prev) => {
      const updated = prev.filter((c) => c.id !== id);
      // Atualizar cache
      cacheService.set(updated);
      return updated;
    });
  }, []);

  // Buscar contato específico por ID
  const getContact = useCallback(async (id) => {
    try {
      // Primeiro, tentar buscar da API
      const response = await api.get(`/contacts/${id}`);
      return response.data;
    } catch (apiError) {
      // Se API falhar, buscar do cache local
      const cachedContacts = cacheService.get();
      // String() dos dois lados: o ID pode ser "5" (API) ou um timestamp (offline)
      const found = cachedContacts?.find((c) => String(c.id) === String(id));
      if (found) return found;
      throw new Error("Contato não encontrado");
    }
  }, []);

  useEffect(() => {
    const syncPendingContacts = async () => {
      try {
        // Buscar contatos da API
        const response = await api.get("/contacts");
        const serverContacts = response.data;

        // Encontrar contatos que existem localmente mas não no servidor
        const pendingContacts = contacts.filter(
          (local) =>
            // Se o ID é um timestamp (salvo offline), precisa sincronizar
            typeof local.id === "number" &&
            local.id > 1000000000000 && // Timestamp válido
            !serverContacts.some(
              (server) =>
                server.nome === local.nome &&
                server.email === local.email &&
                server.telefone === local.telefone
            )
        );

        // Enviar contatos pendentes para a API
        for (const pending of pendingContacts) {
          try {
            const { id, ...contactData } = pending;
            await api.post("/contacts", contactData);
          } catch (err) {
            console.error("Erro ao sincronizar contato:", err);
          }
        }

        // Atualizar com dados do servidor
        // (busca de novo para já trazer os contatos recém-enviados)
        const finalResponse = await api.get("/contacts");
        setContacts(finalResponse.data);
        cacheService.set(finalResponse.data);
      } catch (err) {
        console.error("Erro na sincronização:", err);
      }
    };

    const handleOnline = () => {
      setIsOffline(false);
      syncPendingContacts();
    };
    const handleOffline = () => setIsOffline(true);

    // Verificar status inicial
    setIsOffline(!navigator.onLine);

    // Adicionar listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [contacts]);

  // Carregar contatos na inicialização
  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  // Valor do Context
  const value = {
    contacts,
    loading,
    error,
    isOffline,
    addContact,
    removeContact,
    loadContacts,
    getContact,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsContext;
