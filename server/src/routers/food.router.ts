import { Router } from "express";
import {
  addCategory,
  addFood,
  getAllFoods,
  getCategory,
  getFood,
} from "../controllers";

const foodRouter = Router();

foodRouter.get("/all", getAllFoods);
foodRouter.post("/new", addFood);
foodRouter.get("/add", getFood);
foodRouter.post("/title", addCategory);
foodRouter.get("/name", getCategory);

export default foodRouter;
