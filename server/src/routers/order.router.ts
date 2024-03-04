import { Router } from "express";
import { getOrder, order } from "../controllers";

const orderRouter = Router();

orderRouter.post("/wait", order).get("/get", getOrder);

export default orderRouter;
