"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { api } from "@/src/common/axios";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type User = {
  name: string;
  phone: string;
  email: string;
  address: string;
  userImage: string;
};

type AuthContextType = {
  isLogged: boolean;
  signUp: (
    name: string,
    email: string,
    address: string,
    password: string,
    passAgain: string
  ) => void;
  login: (email: string, password: string) => void;
  signOut: () => void;
  newPassword: (password: string, otp: string) => void;
  sendEmail: (email: string) => void;
  checkOtp: (otp: string) => void;
  changeUser: (userImage: string, name: string, phone: string) => void;

  //user profile medeelel awah
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

// const [foods]

// [{
// food: {},
// quantity:1
// }, {

// }]

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);
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

  const signOut = async () => {
    localStorage.removeItem("token");

    router.push("/login");
  };

  // gmail-ruu  otp ywuulah

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
  // otp shalgah

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

  //newtersen user-iin password solih

  const newPassword = async (password: string) => {
    const email = localStorage.getItem("email");
    const otp = localStorage.getItem("otp");

    try {
      const { data } = await axios.post("http://localhost:8000/auth/new", {
        email,
        password,
        otp,
      });

      toast.success(data.message, {
        position: "top-center",
      });

      router.push("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  // newtersen hereglegchiin medeelel awah

  const getUser = async () => {
    try {
      const { data } = await api.get("auth/user", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  // newtersen user-iin medeelel shinechleh

  const changeUser = async (
    userImage: string,
    name: string,
    phoneNumber: string
  ) => {
    try {
      const { data } = await axios.post("http://localhost:8000/auth/change", {
        userImage,
        name,
        phoneNumber,
      });

      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signUp,
        login,
        signOut,
        newPassword,
        sendEmail,
        checkOtp,
        setUser,
        changeUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);