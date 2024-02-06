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
      message: "User not found",
    });
  }

  const id = user._id;

  const token = jwt.sign({ id }, "secret-key");

  res.json({
    token,
  });
};

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password, address } = req.body;

  const userExist = await UserModel.findOne({ email: email });

  if (userExist) {
    return res.status(401).json({
      message: "User already exist",
    });
  }

  await UserModel.create({
    name,
    email,
    password,
    address,
    updatedAt: new Date(),
    createdAt: new Date(),
  });

  return res.json({
    message: "New user created",
  });
};

export const newPassword: RequestHandler = async (req, res) => {
  const { email } = req.body;

  console.log(req.body);

  const otp = Math.floor(Math.random() * 1000000);

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Email not found",
    });
  }

  const newUser = await UserModel.findOneAndUpdate(
    { _id: user._id },
    {
      otp: otp,
    }
  );
  return res.json({
    message: "Имэйл зөв байна",
  });
};
