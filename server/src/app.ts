import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import { authMiddleware } from "./middlewares/auth.middleware";
import emailRouter from "./routers/email.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/auth", authRouter);

// app.use("/foods", authMiddleware);

app.use("/foods", foodRouter);
app.use("/email", emailRouter);

export default app;
