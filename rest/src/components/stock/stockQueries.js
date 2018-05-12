const stock = require('../../config/database/models/stockModel');
const vendor = require('../../config/database/models/vendorModel')

module.exports.addStockQuery = (
  {
    brand,
    product,
    color,
    weight,
    texture,
    price,
    vendorId
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
      vendorId
    }
  );
}

module.exports.fetchAllStockQuery = () => {
  return stock.findAll({
    include: [vendor]
  });
}

module.exports.fetchStockQuery = ({stockId}) => {
  return stock.findById(stockId, {
    include: [vendor]
  });
}

module.exports.deleteStockQuery = ({stockId}) => {
  return stock.destroy(stockId);
}

module.exports.updateStockQuery = ({stockId}, data) => {
  console.log(stockId, data);
  return null;
}
