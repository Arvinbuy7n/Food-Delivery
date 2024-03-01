import { RequestHandler } from "express";
import { OrderModel } from "../models";
import jwt, { JwtPayload } from "jsonwebtoken";

export const order: RequestHandler = async (req, res) => {
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
    message: "New food added successfully",
  });
};
