import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI2);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Mongodb connection error:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
    process.exit(1);
  }
};

export default connectDB;
