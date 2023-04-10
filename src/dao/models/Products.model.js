const mongoose = require("mongoose");

const collectionName = "products";

const collectionSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  stock: Number,
  image: String,
});

const Products = mongoose.model(collectionName, collectionSchema);

module.exports = Products;
