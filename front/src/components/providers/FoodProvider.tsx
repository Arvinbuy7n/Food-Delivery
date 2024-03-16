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
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { api } from "../../common";

type Category = {
  category: string;
};

export type Record = {
  _id: string;
  foodName: string;
  foodCategory: string;
  ingredient: string;
  price: number;
  discount?: number;
  foodImage?: any;
};

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

type FoodContextType = {
  addFood: (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: number,
    discount?: string,
    foodImage?: string
  ) => void;
  addCategory: (category: string) => void;

  categoryList: Category[];
  setCategoryList: Dispatch<SetStateAction<Category[]>>;

  recordList: Record[];
  setRecordList: Dispatch<SetStateAction<Record[]>>;

  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const FoodProvider = ({ children }: PropsWithChildren) => {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [recordList, setRecordList] = useState<Record[]>([]);
  const [refresh, setRefresh] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  //add new food
  const addFood = async (
    foodName: string,
    foodCategory: string,
    ingredient: string,
    price: number,
    discount?: string,
    foodImage?: string
  ) => {
    try {
      const { data } = await api.post(
        "/foods/new",
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

      setRefresh(refresh + 1);
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

  //add new category
  const addCategory = async (category: string) => {
    try {
      const { data } = await api.post(
        "/foods/title",
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

      setRefresh(refresh + 1);
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
      const { data } = await api.get("/foods/name", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setCategoryList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
    getFood();
  }, [refresh]);

  return (
    <FoodContext.Provider
      value={{
        addFood,
        addCategory,
        categoryList,
        setCategoryList,
        recordList,
        setRecordList,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
