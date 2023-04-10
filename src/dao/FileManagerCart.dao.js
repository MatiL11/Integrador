const fs = require("fs");

class FileManagerCart {
  constructor() {}

  async loadCarts() {
    if (fs.existsSync(process.cwd() + "/src/files/Carts.json")) {
      const data = await fs.promises.readFile(
        process.cwd() + "/src/files/Carts.json"
      );
      const newCarts = JSON.parse(data);
      return newCarts;
    }
    return "File not found";
  }

  async saveCarts() {
    await fs.promises.writeFile();
  }
}

module.exports = FileManagerCart;
