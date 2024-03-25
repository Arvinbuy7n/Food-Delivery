"use client";

import { api } from "@/src/common";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
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
  phone: string;
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
  foodImage?: string;
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

  postOrder: (deliveryAddress: DeliveryAddress, order: CartFood[]) => void;
  getOrder: () => void;

  orderList: Order[];
};

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [addBasket, setAddBasket] = useState<CartFood[]>([]);
  const [isRender, setIsRender] = useState(true);
  const [add, setAdd] = useState(1);
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [refresh, setRefresh] = useState(1);
  const router = useRouter();

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

  const postOrder = async (
    deliveryAddress: DeliveryAddress,
    order: CartFood[]
  ) => {
    try {
      const { data } = await axios.post(
        "https://fooddelivery-x50y.onrender.com/order/wait",
        {
          deliveryAddress,
          order,
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
      setRefresh(refresh + 1);
      router.push("/orderHistory");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  const getOrder = async () => {
    try {
      const { data } = await axios.get(
        "https://fooddelivery-x50y.onrender.com/order/get",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setOrderList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, [refresh]);

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
        getOrder,
        orderList,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => useContext(CardContext);
