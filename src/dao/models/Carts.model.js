const mongoose = require("mongoose");

const collectionName = "carts";

const collectionSchema = new mongoose.Schema({
  name: String,
  code: String,
  products: Array,
});

const Carts = mongoose.model(collectionName, collectionSchema);

module.exports = Carts;
