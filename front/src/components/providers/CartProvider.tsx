"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

const CardContext = createContext<CardContextType>({} as CardContextType);

type Record = {
  _id: string;
  foodName: string;
  foodCategory: string;
  ingredient: string;
  price: string;
  discount?: string;
  foodImage?: any;
};

type CartFood = {
  food: Record;
  quantity: number;
};

type CardContextType = {
  // removeFood: (record: CartFood) => void;
  addFood: (record: CartFood) => void;
  recordList: CartFood[];
};

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [recordList, setRecordList] = useState<CartFood[]>([]);

  const addFood = async ({ food, quantity }: CartFood) => {
    setRecordList((prev) => {
      const current = prev.findIndex((item) => item.food._id === food._id);

      if (current !== -1) {
        prev[current].quantity += quantity;
        return prev;
      }

      return [...prev, { food, quantity }];
    });
  };

  return (
    <CardContext.Provider
      value={{
        addFood,
        recordList,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
