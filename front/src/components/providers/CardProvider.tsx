"use client";

import { api } from "@/src/common/axios";
import axios, { AxiosError } from "axios";
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

const CardContext = createContext<CardContextType>({} as CardContextType);

type Record = {
  foodName: string;
  foodCategory: string;
  ingredient: string;
  price: string;
  discount?: string;
  foodImage?: any;
};

type CardContextType = {
  addFood: (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: string,
    discount?: string,
    foodImage?: string
  ) => void;

  recordList: Record[];
  setRecordList: Dispatch<SetStateAction<Record[]>>;
};

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [recordList, setRecordList] = useState<Record[]>([]);

  const addFood = async (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: string,
    discount?: string,
    foodImage?: string
  ) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/foods/new",
        {
          foodName,
          foodCategory,
          ingredient,
          price,
          discount,
          foodImage,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

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

  const getFood = async () => {
    try {
      const { data } = await api.get("/foods/add", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setRecordList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFood();
  }, []);
  return (
    <CardContext.Provider
      value={{
        addFood,
        recordList,
        setRecordList,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
