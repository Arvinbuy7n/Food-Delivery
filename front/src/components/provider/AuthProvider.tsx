"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { api } from "../common/axios";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

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
  newPassword: (email: string) => void;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
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

  const newPassword = async (email: string) => {
    try {
      const { data } = await api.post("/auth/new", {
        email,
      });

      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signUp,
        login,
        logout: () => {},
        newPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
