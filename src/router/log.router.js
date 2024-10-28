const router = require("express").Router();

const Logs = require("../model/log.model");

router.get("/logs", (req, res) => {
  res.send("User router");
});

router.post("/logs", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  await Logs.sync();

  const log = await Logs.create({
    Ip: ip,
    Date: new Date(),
    Action: "GET",
  });

  res.send(log);
});

module.exports = router;
