import { RequestHandler } from "express";
import { FoodModel, OrderModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const order: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Hereglegch newtersnii daraa zahialga hiinuu",
      });
    }

    const { id } = jwt.verify(authorization, "item") as JwtPayload;

    const { order, deliveryAddress } = req.body;

    const food = await OrderModel.create({
      userid: id,
      deliveryAddress,
      foods: order,
      deliveryStatus: "Waiting",
      createdAt: new Date(),
    });

    return res.json({
      message: "New order added successfully",
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

    const { id } = jwt.verify(authorization, "item") as JwtPayload;

    const orders = await OrderModel.find({ userid: id });

    return res.json(orders);
  } catch (err) {
    res.json(err);
  }
};
