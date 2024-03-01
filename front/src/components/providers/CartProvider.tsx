"use client";

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

type DeliveryAddress = {
  district: string;
  khoroo: string;
  apart: string;
  addition: string;
  phone: number;
  paymentMethod: boolean;
};

type Order = {
  createdAt: Date;
  deliveryStatus: string;
  userID: string;
  _v: number;
  _id: string;
  deliveryAddress: DeliveryAddress[];
  foods: Record[];
};

type Record = {
  _id?: string;
  foodName: string;
  foodCategory?: string;
  ingredient: string;
  price: number;
  discount?: number;
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

  postOrder: (deliveryAddress: DeliveryAddress, order: Record[]) => void;
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

    const sumBasket = addBasket.reduce((sum, currentValue) => {
      return sum + currentValue.food.price * currentValue.quantity;
    }, 0);
  };

  const postOrder = async (
    deliveryAddress: DeliveryAddress,
    order: Record[]
  ) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/order/wait",
        {
          deliveryAddress,
          order,
        },
        {
          headers: {
            Authorization: localStorage.getItem("item"),
          },
        }
      );
      toast.success(data.message, {
        position: "top-center",
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message, {
          hideProgressBar: true,
        });
      }
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
        postOrder,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
