import { Router } from "express";
import { order } from "../controllers";

const orderRouter = Router();

orderRouter.post("/wait", order);

export default orderRouter;
