const stock = require('../../config/database/models/stockModel');

module.exports.addStockQuery = (
  {
    brand,
    product,
    color,
    weight,
    texture,
    price,
    vendor_id
  }
) => {
  return stock.create(
    {
      brand,
      product,
      color,
      weight,
      texture,
      price,
      vendor_id
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
