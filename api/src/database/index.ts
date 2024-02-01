import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Arvinbuyn:Aagii1215@arvinbuyn.z1bszfh.mongodb.net/FoodDelivery?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (err) {
    console.log("Database connection failed");
  }
};
