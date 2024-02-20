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
    address: string,
    password: string,
    passAgain: string
  ) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  newPassword: (password: string, otp: string) => void;
  sendEmail: (email: string) => void;
  checkOtp: (otp: string) => void;
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

      router.push("/home");
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
    address: string,
    password: string
  ) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/sign", {
        name,
        email,
        address,
        password,
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

  const sendEmail = async (email: string) => {
    try {
      const { data } = await axios.post("http://localhost:8000/email/send", {
        email,
      });

      localStorage.setItem("email", email);

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

  const checkOtp = async (otp: string) => {
    const email = localStorage.getItem("email");

    try {
      const { data } = await axios.post("http://localhost:8000/auth/code", {
        email,
        otp,
      });

      localStorage.setItem("otp", otp);

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

  const newPassword = async (password: string) => {
    const email = localStorage.getItem("email");
    const otp = localStorage.getItem("otp");

    try {
      const { data } = await axios.post("http://localhost:8000/auth/new", {
        email,
        password,
        otp,
      });

      toast.success(data.message);

      router.push("/login");
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
