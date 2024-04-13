import mongoose, { Schema, model } from "mongoose";

export const orderSchema = new Schema({
  userid: mongoose.Schema.Types.ObjectId,

  deliveryAddress: [
    {
      district: String,
      khoroo: String,
      apart: String,
      addition: String,
      phone: Number,
      paymentMethod: {
        type: String,
        required: false,
      },
    },
  ],
  foods: [
    {
      discount: String,
      foodCategory: String,
      foodImage: String,
      foodName: String,
      ingredient: String,
      price: Number,
    },
  ],

  deliveryStatus: {
    type: String,
    required: true,
  },

  createdAt: Date,
  updatedAt: Date,

  deliveredAt: {
    type: Date,
    required: false,
  },
});

export const OrderModel = model("order", orderSchema);
