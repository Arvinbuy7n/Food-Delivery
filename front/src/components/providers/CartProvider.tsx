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
  addFood: (record: CartFood) => void;
  addBasket: CartFood[];
  setAddBasket: Dispatch<SetStateAction<CartFood[]>>;
  add: number;
  setAdd: Dispatch<SetStateAction<number>>;
};

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [addBasket, setAddBasket] = useState<CartFood[]>([]);
  const [isRender, setIsRender] = useState(true);
  const [add, setAdd] = useState(1);

  const addFood = async ({ food, quantity }: CartFood) => {
    const clone = [...addBasket];

    const current = clone.findIndex((item) => item.food._id === food._id);

    if (current !== -1) {
      clone[current].quantity += quantity;
      setAddBasket(clone);
    } else {
      setAddBasket([...clone, { food, quantity }]);
    }
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
        addBasket,
        setAddBasket,
        add,
        setAdd,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
