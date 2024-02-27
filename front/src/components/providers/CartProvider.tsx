"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CardContext = createContext<CardContextType>({} as CardContextType);

type Record = {
  _id?: string;
  foodName: string;
  foodCategory?: string;
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
  addBasket: CartFood[];
};

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [addBasket, setAddBasket] = useState<CartFood[]>([]);
  const [isRender, setIsRender] = useState(true);

  const addFood = async ({ food, quantity }: CartFood) => {
    setAddBasket((prev) => {
      const current = prev.findIndex((item) => item.food._id === food._id);

      if (current !== -1) {
        const arr = [...prev];
        arr[current].quantity += quantity;
        return arr;
      }

      return [...prev, { food, quantity }];
    });
  };

  const removeFood = async ({ children }: PropsWithChildren) => {
    localStorage.removeItem("secret-key");
  };

  useEffect(() => {
    const basket = localStorage.getItem("secret-key");

    if (basket) {
      setAddBasket(JSON.parse(basket));
    }
    setIsRender(false);
  }, []);

  useEffect(() => {
    if (isRender) return;

    localStorage.setItem("secret-key", JSON.stringify(addBasket));
  }, [addBasket]);

  return (
    <CardContext.Provider
      value={{
        addFood,
        // removeFood,
        addBasket,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
