"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

type User = {
  email: String;
  _id: string;
};

type FoodContextType = {
  addFood: (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: string,
    discount?: string,
    foodImage?: string
  ) => void;
};

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const addFood = async (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: string,
    discount?: string,
    foodImage?: string
  ) => {
    try {
      const { data } = await axios.post("http://localhost:8000/foods/new", {
        foodName,
        foodCategory,
        ingredient,
        price,
        discount,
        foodImage,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <FoodContext.Provider
      value={{
        addFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
