import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: false,
  },
  otp: {
    type: Number,
    require: false,
  },
  updatedAt: {
    type: Date,
    require: false,
  },
  createdAt: {
    type: Date,
    require: false,
  },
  userImage: {
    type: String,
    require: false,
  },
  phone: {
    type: String,
    require: false,
  },
});

export const UserModel = model("user", UserSchema);
