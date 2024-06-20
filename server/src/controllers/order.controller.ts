import { RequestHandler } from "express";
import { FoodModel, OrderModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const order: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Hereglegch newtersnii daraa zahialga hiinuu",
    });
  }

  const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

  try {
    const { order, deliveryAddress } = req.body;

    await OrderModel.create({
      userid: id,
      deliveryAddress,
      foods: order,
      deliveryStatus: "Хүлээгдэж буй",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.json({
      message: "Захиалга амжилттай хийгдлээ",
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOrder: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "burtgelgui hereglegch bna",
      });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const orders = await OrderModel.find({ userid: id });

    return res.json(orders);
  } catch (err) {
    res.json(err);
  }
};
