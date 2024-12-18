import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import { exit } from "node:process";

dotenv.config();

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.cyan.bold(`MongoDB connected: ${url}`));
  } catch (error) {
    console.log(error.message);
    exit(1);
  }
};