import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/login", login).post("/sign", signUp);

export default authRouter;
