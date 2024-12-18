import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import logRoutes from "./routes/logRoutes";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/log", logRoutes);



app.use("/", (req, res) => {res.send("API is running...")});

export default app;
