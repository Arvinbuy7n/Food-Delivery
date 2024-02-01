import { Router } from "express";
import { addFood, getAllFoods } from "../controllers";

const foodRouter = Router();

foodRouter.get("/", getAllFoods);
foodRouter.post("/", addFood);

export default foodRouter;
