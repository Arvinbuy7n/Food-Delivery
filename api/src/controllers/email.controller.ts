import { RequestHandler } from "express";
import nodemailer from "nodemailer";
export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  try {
    const transforter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "arwinbuyan88705548@gmail.com",
        pass: "mvlv cnge ovuu muom",
      },
    });

    const mailOptions = {
      from: "arwinbuyan88705548@gmail.com",
      to: "email",
      subject: "Hello from nodemailer",
      text: "This is a test email sent using Nodemailer",
    };

    await transforter.sendMail(mailOptions);

    res.json("Email sent");
  } catch (err) {
    res.status(500).json(err);
  }
};
