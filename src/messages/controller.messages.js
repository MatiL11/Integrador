const { Router } = require("express");
const Messages = require("../dao/models/Messages.model");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Messages.find();
    res.json({ message: users });
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { user, message } = req.body;
    const newMessageInfo = {
      user,
      message,
    };
    const newMessage = await Messages.create(newMessageInfo);
    res.json({ message: newMessage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
