class CartsDao {
  constructor() {}

  async FindAll() {
    try {
      return await Carts.find();
    } catch (error) {
      return error;
    }
  }

  async FindOne(id) {
    try {
      return await Carts.findById(id);
    } catch (error) {
      return error;
    }
  }

  async InsertMany(newCartsInfo) {
    try {
      return await Carts.insertMany(newCartsInfo);
    } catch (error) {
      return error;
    }
  }

  async Create(newCartInfo) {
    try {
      return await Carts.create(newCartInfo);
    } catch (error) {
      return error;
    }
  }

  async Delete(id) {
    try {
      return await Carts.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }

  async DeleteAll() {
    return await Carts.deleteMany();
  }
}

module.exports = CartsDao;
