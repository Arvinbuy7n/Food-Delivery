import { Router } from "express";
import { login, newPassword, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/login", login)
  .post("/sign", signUp)
  .post("/new", newPassword);

export default authRouter;
