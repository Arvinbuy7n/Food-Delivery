import { RequestHandler } from "express";
import { FoodModel } from "../models";

export const getAllFoods: RequestHandler = async (req, res) => {
  const foods = await FoodModel.find({});

  res.json(foods);
};

export const addFood: RequestHandler = async (req, res) => {
  const { foodName, price, discount } = req.body;

  return res.json(req.body);

  const findFood = await FoodModel.findOne({ foodName });

  if (findFood) {
    return res.status(401).json({
      message: "invalid message",
    });
  }

  const food = await FoodModel.create({
    foodName,
    price,
    discount,
  });

  return res.json({
    message: "Food added",
  });
};
