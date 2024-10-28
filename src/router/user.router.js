const router = require("express").Router();

const Users = require("../model/user.model");

router.get("/users", (req, res) => {
  res.send("User router");
});

router.post("/users", async (req, res) => {
  await Users.sync();

  const user = await Users.create({
    Name: req.body.Name,
  });

  res.send(user);
});

module.exports = router;
