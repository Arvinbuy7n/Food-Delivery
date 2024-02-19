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
    message: "Амжилттай бүртгэгдлээ.",
  });
};

export const checkOtp: RequestHandler = async (req, res) => {
  const { email, otp } = req.body;

  const check = await UserModel.find({ email, otp });

  if (!check) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  return res.json(true);
};

export const newPassword: RequestHandler = async (req, res) => {
  const { email, password, passAgain } = req.body;

  const otp = Math.floor(Math.random() * 1000000);

  const user = await UserModel.findOne({ email, password, passAgain });

  if (!user) {
    return res.status(401).json({
      message: "Password is correct.",
    });
  }

  const newUser = await UserModel.findOneAndUpdate(
    { _id: user._id },
    {
      otp: otp,
    }
  );

  return res.json({
    message: "Email sent",
  });
};
