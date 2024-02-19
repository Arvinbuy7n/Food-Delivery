"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type User = {
  email: String;
  _id: string;
};

type AuthContextType = {
  isLogged: Boolean;
  signUp: (
    name: string,
    email: string,
    password: string,
    address: string,
    passAgain: string
  ) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  newPassword: (email: string) => void;
  sendEmail: (email: string) => void;
  checkOtp: (email: string, otp: string) => void;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/login", {
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

  const signUp = async (
    name: string,
    email: string,
    password: string,
    address: string
  ) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/sign", {
        name,
        email,
        password,
        address,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);

      router.push("/login");

      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  const newPassword = async (email: string) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/new", {
        email,
      });

      toast.success(data.message);
      if (data) {
        router.push("/new3");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  const sendEmail = async (email: string) => {
    try {
      const { data } = await axios.post("http://localhost:8000/email/send", {
        email,
      });

      toast.success(data.message);

      router.push("/new2");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  const checkOtp = async (email: string, otp: string) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/code", {
        email,
        otp,
      });

      toast.success(data.message);
      if (data) {
        router.push("/new3");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
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
        sendEmail,
        checkOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
