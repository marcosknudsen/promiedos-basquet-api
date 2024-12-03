const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const userRouter = require("../router/user.router");
const logRouter = require("../router/log.router");

const app = express();

app.use(cors({
  origin: process.env.HOST,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRouter);
app.use("/api", logRouter);

module.exports = app;
