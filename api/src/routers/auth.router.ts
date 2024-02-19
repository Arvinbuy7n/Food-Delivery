import { Router } from "express";
import {
  checkOtp,
  login,
  newPassword,
  signUp,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/login", login)
  .post("/sign", signUp)
  .post("/new", newPassword)
  .post("/code", checkOtp);

export default authRouter;
