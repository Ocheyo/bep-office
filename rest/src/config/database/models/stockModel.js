const {db, Sequelize} = require('../index');

const Stock = db.define('stock', {
  brand: Sequelize.STRING,
  product: Sequelize.STRING,
  color: Sequelize.STRING,
  weight: Sequelize.INTEGER,
  texture: Sequelize.STRING,
  price: Sequelize.FLOAT,
  vendor_id: Sequelize.INTEGER
});

Stock.sync()
  .then(() => console.log('Stock table created'))
  .catch(err => console.error(err));

module.exports = Stock;
