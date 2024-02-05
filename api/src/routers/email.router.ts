import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";

const emailRouter = Router().post("/send", sendEmail);

export default emailRouter;
