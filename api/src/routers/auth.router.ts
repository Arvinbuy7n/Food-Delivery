import { Router } from "express";
import {
  checkOtp,
  getUser,
  login,
  newPassword,
  signUp,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter
  .post("/login", login)
  .post("/sign", signUp)
  .post("/new", newPassword)
  .post("/code", checkOtp)
  .get("/user", getUser);

export default authRouter;
