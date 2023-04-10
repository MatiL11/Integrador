const { Router } = require("express");
const Carts = require("../dao/models/Carts.model");
const CartsDao = require("../dao/Carts.dao");
const FileManagerCartDao = require("../dao/FileManagerCart.dao");

const router = Router();
const cartsDao = new CartsDao();
const fileManagerCartDao = new FileManagerCartDao();

router.get("/loadCarts", async (req, res) => {
  try {
    const carts = await fileManagerCartDao.loadCarts();
    const newCarts = await cartsDao.InsertMany(carts);

    res.json({ message: newCarts });
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const carts = await cartsDao.findAll();
    res.json({ message: carts });
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, code, products } = req.body;
    const newCartsInfo = {
      name,
      code,
      products,
    };
    const newCart = await Carts.Create(newCartsInfo);
    res.json({ message: newCart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCart = await cartsDao.Delete(id);
    res.json({ message: deletedCart });
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/deleteAll", async (req, res) => {
  await cartsDao.deleteAll();
  res.json({ message: "All carts deleted" });
});

module.exports = router;
