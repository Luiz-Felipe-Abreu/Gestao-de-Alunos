import React, { createContext, useState, useContext } from 'react';

interface Usuario {
  token: string;
  nome: string;
}

interface ContextoAutenticacaoProps {
  usuario: Usuario | null;
  login: (token: string, nome: string) => void;
  logout: () => void;
}

const ContextoAutenticacao = createContext<ContextoAutenticacaoProps | undefined>(undefined);

export const ProvedorAutenticacao: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (token: string, nome: string) => {
    setUsuario({ token, nome });
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <ContextoAutenticacao.Provider value={{ usuario, login, logout }}>
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export const useAutenticacao = () => {
  const contexto = useContext(ContextoAutenticacao);
  if (!contexto) {
    throw new Error('useAutenticacao deve ser usado dentro do ProvedorAutenticacao');
  }
  return contexto;
};
