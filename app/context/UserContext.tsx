// src/app/context/UserContext.tsx
"use client";

import React, { createContext, useState, ReactNode, useContext } from 'react';

// Interface pour l'utilisateur
interface User {
  name: string;
  role: string;
}

// Interface pour le contexte utilisateur
interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Création du contexte
const UserContext = createContext<UserContextType | undefined>(undefined);

// Fournisseur de contexte utilisateur
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte utilisateur
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
