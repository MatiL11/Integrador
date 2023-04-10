class ProductsDao {
  constructor() {}

  async findAll() {
    try {
      return await Products.find();
    } catch (error) {
      return error;
    }
  }

  async insertMany(newProductsInfo) {
    try {
      return await Products.insertMany(newProductsInfo);
    } catch (error) {
      return error;
    }
  }

  async create(newProductInfo) {
    try {
      return await Products.create(newProductInfo);
    } catch (error) {
      return error;
    }
  }

  async deleteAll() {
    return await Product.deleteMany();
  }
}

module.exports = ProductsDao;
