import { Router } from "express";
import {
  changeUser,
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
  .get("/user", getUser)
  .post("/change", changeUser);

export default authRouter;
