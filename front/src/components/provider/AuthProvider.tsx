"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { api } from "../common/axios";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type User = {
  email: String;
  _id: string;
};

type AuthContextType = {
  isLogged: Boolean;
  signUp: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getData = () => {
    setIsOpen((p) => !p);
  };

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    try {
      const { data } = await api.post("/sign", {
        name,
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signUp,
        login,
        logout: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
