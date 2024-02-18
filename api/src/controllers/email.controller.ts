import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(Math.random() * 1000000);

  try {
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
    const transforter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "arwinbuyan88705548@gmail.com",
        pass: "mvlvcngeovuumuom",
      },
    });

    const mailOptions = {
      from: "arwinbuyan88705548@gmail.com",
      to: email,
      subject: "Hello! from Food Delivery",
      text: `Neg udaagiin code: ${otp}`,
    };

    await transforter.sendMail(mailOptions);

    res.json("Email sent");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const otp: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = UserModel.find({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
};
