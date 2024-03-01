import mongoose, { Schema, model } from "mongoose";

export const orderSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
  },

  deliveryAddress: [
    {
      district: String,
      khoroo: String,
      apart: String,
      addition: String,
      phone: Number,
      paymentMethod: String,
    },
  ],
  foods: [
    {
      foodName: String,
      foodCategory: String,
      ingredient: String,
      price: Number,
      discount: String,
      foodImage: String,
    },
  ],

  deliveryStatus: {
    type: String,
    required: true,
  },

  createdAt: Date,

  deliveredAt: {
    type: Date,
    required: false,
  },
});

export const OrderModel = model("order", orderSchema);
