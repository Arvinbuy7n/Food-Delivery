import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/auth", authRouter);
app.use("/foods", foodRouter);

export default app;
