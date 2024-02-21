import { RequestHandler } from "express";
import { FoodModel } from "../models";
import { CategoryModel } from "../models/category.model";

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

export const getFood: RequestHandler = async (_req, res) => {
  const foods = await FoodModel.find({});

  return res.json(foods);
};

export const addCategory: RequestHandler = async (req, res) => {
  const { category } = req.body;

  const findCategory = await CategoryModel.findOne({ category });

  if (findCategory) {
    return res.status(401).json({
      message: "Category is added",
    });
  }

  const categories = await CategoryModel.create({
    category,
  });

  return res.json({
    message: "New category created",
  });
};

export const getCategory: RequestHandler = async (_req, res) => {
  const categories = await CategoryModel.find({});

  return res.json(categories);
};
