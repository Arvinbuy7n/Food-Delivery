import { Router } from "express";
import { addCategory, addFood, getAllFoods } from "../controllers";

const foodRouter = Router();

foodRouter.get("/all", getAllFoods);
foodRouter.post("/new", addFood);
foodRouter.post("/title", addCategory);

export default foodRouter;
