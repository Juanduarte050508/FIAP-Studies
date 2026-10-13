import { useMemo } from "react";

export const useStatistics = (contacts) => {
  return useMemo(() => {
    const total = contacts.length;
    const comEmail = contacts.filter((c) => c.email).length;
    const comTelefone = contacts.filter((c) => c.telefone).length;

    return {
      total,
      comEmail,
      comTelefone,
      semEmail: total - comEmail,
      semTelefone: total - comTelefone,
    };
  }, [contacts]);
};
