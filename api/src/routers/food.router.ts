import { Router } from "express";
import { addFood, getAllFoods } from "../controllers";

const foodRouter = Router();

foodRouter.get("/all", getAllFoods);
foodRouter.post("/new", addFood);

export default foodRouter;
