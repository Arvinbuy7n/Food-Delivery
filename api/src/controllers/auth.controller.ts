import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email,
    password,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid Credentials",
    });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key");

  res.json({
    token,
  });

  return res.json(user);
};

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await UserModel.find({ email: email });

  if (!userExist) {
    return res.status(401).json({
      message: "User already exist",
    });
  }

  return res.json(userExist);

  await UserModel.create({
    name,
    email,
    password,
    updatedAt: new Date(),
    createdAt: new Date(),
  });

  return res.json({
    message: "New user created",
  });
};
