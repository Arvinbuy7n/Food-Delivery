import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  try {
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
    const role = user.role;

    const token = jwt.sign({ id, role }, "secret-key");

    res.json({
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

export const signUp: RequestHandler = async (req, res) => {
  try {
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
      role: "user",
    });

    return res.json({
      message: "Амжилттай бүртгэгдлээ.",
    });
  } catch (err) {
    console.log(err);
  }
};

export const checkOtp: RequestHandler = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const check = await UserModel.findOne({ email, otp });

    if (!check) {
      return res.status(401).json({
        message: "Code is correct",
      });
    }

    return res.json(true);
  } catch (err) {
    console.log(err);
  }
};

export const newPassword: RequestHandler = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await UserModel.findOne({ email, otp });

    if (!user) {
      return res.status(401).json({
        message: "Email is correct",
      });
    }

    await UserModel.updateOne(
      {
        email,
      },
      { password }
    );

    return res.json({
      message: "Нууц үг амжилттай солигдлоо",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload as JwtPayload;

    const users = await UserModel.findOne({ _id: id });

    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

export const changeUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      messsage: "Invalid",
    });
  }

  try {
    const { name, userImage, email, phone } = req.body;

    const payload = jwt.verify(authorization, "secret-key") as JwtPayload;

    const id = payload.id;

    await UserModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        userImage,
        name,
        phone,
        email,
      }
    );

    return res.json({
      message: "Мэдээлэл амжилттай шинэчлэгдлээ.",
    });
  } catch (err) {
    console.log(err);
  }
};
