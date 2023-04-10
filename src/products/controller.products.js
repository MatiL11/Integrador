const { Router } = require("express");
const uploader = require("../utils/multer.utils");
const FileManager = require("../dao/FileManager.dao");
const ProductsDao = require("../dao/Products.dao");

const router = Router();
const fileManager = new FileManager();
const Products = new ProductsDao();

router.get("/loadItems", async (req, res) => {
  try {
    const products = await fileManager.loadItems();

    const newProducts = await Products.insertMany(products);

    res.json({ message: newProducts });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json({ message: products });
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", uploader.single("file"), async (req, res) => {
  try {
    const { title, price, description, stock } = req.body;
    const newProductInfo = {
      title,
      description,
      price,
      stock,
      image: req.file.filename,
    };
    const newProduct = await Products.create(newProductInfo);
    res.json({ message: newBook });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteAll", async (req, res) => {
  await Products.deleteAll();
  res.json({ message: "All products deleted" });
});

module.exports = router;
