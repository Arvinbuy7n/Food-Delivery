import { RequestHandler } from "express";
import { FoodModel } from "../models";
import { CategoryModel } from "../models/category.model";

export const addFood: RequestHandler = async (req, res) => {
  try {
    const { foodName, foodCategory, ingredient, price, discount, foodImage } =
      req.body;

    const findFood = await FoodModel.findOne({ foodName });

    if (findFood) {
      return res.status(401).json({
        message: "Food has already added",
      });
    }

    await FoodModel.create({
      foodName,
      foodCategory,
      ingredient,
      price,
      discount,
      foodImage,
    });

    return res.json({
      message: "Шинэ хоол амжилттай үүслээ.",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getFood: RequestHandler = async (_req, res) => {
  try {
    const foods = await FoodModel.find({});

    return res.json(foods);
  } catch (err) {
    console.log(err);
  }
};

export const addCategory: RequestHandler = async (req, res) => {
  try {
    const { category } = req.body;

    const findCategory = await CategoryModel.findOne({ category });

    if (findCategory) {
      return res.status(401).json({
        message: "Category is added",
      });
    }

    await CategoryModel.create({
      category,
    });

    return res.json({
      message: "Шинэ ангилал амжилттай үүслээ.",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCategory: RequestHandler = async (_req, res) => {
  try {
    const categories = await CategoryModel.find({});

    return res.json(categories);
  } catch (err) {
    console.log(err);
  }
};
