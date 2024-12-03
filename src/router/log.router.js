const router = require("express").Router();

const Logs = require("../model/log.model");

router.get("/logs", (req, res) => {
  res.send("User router");
});

router.post("/logs", async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const { Action, League, Team } = req.body;
  await Logs.sync();

  try{ 
    const log = await Logs.create({
      Ip: ip,
      Date: new Date(),
      Action: Action,
      League_Id: League,
      Team_Id: Team,
    });
    res.send(log);
  }
  catch(err){
    res.send(err);
  }
});

module.exports = router;
