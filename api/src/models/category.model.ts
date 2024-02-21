import { Schema, model } from "mongoose";

export const categorySchema = new Schema({
  category: {
    type: String,
    require: true,
  },
});

export const CategoryModel = model("category", categorySchema);
