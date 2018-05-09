const stock = require('../../config/database/models/stockModel');

module.exports.addStockQuery = (newStock) => {
  return stock.create(
    {
      brand: newStock.brand,
      product: newStock.product,
      color: newStock.color,
      weight: newStock.weight,
      texture: newStock.texture,
      price: newStock.price,
      vendor_id: newStock.vendorId
    }
  );
}

module.exports.fetchAllStockQuery = () => {
  return stock.findAll();
}

module.exports.fetchStockQuery = ({stock_id}) => {
  console.log(stock_id);
  return stock.findById(stock_id);
}

module.exports.deleteStockQuery = ({stock_id}) => {
  console.log(stock_id);
  return stock.destroy(stock_id);
}

module.exports.updateStockQuery = ({stock_id}, data) => {
  console.log(stock_id, data);
  return null;
}
