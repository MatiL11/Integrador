const mongoose = require("mongoose");

const collectionName = "user";

const collectionSchema = new mongoose.Schema({
  user: String,
  message: String,
});

const Messages = mongoose.model(collectionName, collectionSchema);

module.exports = Messages;
