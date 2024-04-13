import mongoose, { Schema, model } from "mongoose";

export const foodSchema = new Schema({
  foodName: {
    type: String,
    require: true,
  },
  foodCategory: {
    type: String,
    require: true,
  },
  ingredient: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  discount: {
    type: String,
    require: true,
  },
  foodImage: {
    type: String,
    require: true,
  },
});

export const FoodModel = model("food", foodSchema);
