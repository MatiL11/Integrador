const messagesController = require("../messages/controller.messages.js");
const productsController = require("../products/controller.products.js");
const cartsController = require("../carts/controller.carts.js");

const router = (app) => {
  app.use("/messages", messagesController);
  app.use("/products", productsController);
  app.use("/carts", cartsController);
};

module.exports = router;
