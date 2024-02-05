import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

type Payload = {
  userId: string;
};

export const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  try {
    const { userId } = jwt.verify(authorization, "secret-key") as Payload;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid",
    });
  }
};
