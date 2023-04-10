const fs = require("fs");

class FileManager {
  constructor() {}

  async loadItems() {
    if (fs.existsSync(process.cwd() + "/src/files/Products.json")) {
      const data = await fs.promises.readFile(
        process.cwd() + "/src/files/Products.json"
      );
      const newProducts = JSON.parse(data);
      console.log("Desde la clase");
      return newProducts;
    }
    return "File not found";
  }

  async saveItems() {
    await fs.promises.writeFile();
  }
}

module.exports = FileManager;
