import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (_req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const addFood: RequestHandler = async (req, res) => {
  const { foodName, foodCategory, ingredient, price, discount, foodImage } =
    req.body;

  const findFood = await FoodModel.findOne({ foodName });

  if (findFood) {
    return res.status(401).json({
      message: "Food has already added",
    });
  }

  const food = await FoodModel.create({
    foodName,
    foodCategory,
    ingredient,
    price,
    discount,
    foodImage,
  });

  return res.json({
    message: "New food added",
  });
};
