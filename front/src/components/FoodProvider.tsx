"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { api } from "../common/axios";

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

type FoodContextType = {
  addFood: (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: string,
    discount?: string,
    foodImage?: string
  ) => void;
  addCategory: (category: string) => void;
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

      toast.success(data.message);
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
      const { data } = await api.get("/food", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addCategory = async (category: string) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/foods/title",
        {
          category,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
        });
      }
    }
  };

  const getCategory = async () => {
    try {
      const { data } = await api.get("/category", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FoodContext.Provider
      value={{
        addFood,
        addCategory,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
