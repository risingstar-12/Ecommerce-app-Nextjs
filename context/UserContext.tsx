// context/UserContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface UserContextType {
  username: string | null;
  login: (name: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("username") : null
  );

   const login = (name: string) => {
    setUsername(name);
    localStorage.setItem("username", name);
  };
  const logout= () => {
    setUsername(null);
    localStorage.removeItem("username");
    
  };



  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};