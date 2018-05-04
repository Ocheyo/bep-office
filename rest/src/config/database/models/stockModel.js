import { db, Sequelize } from '../index';

const Stock = db.define('stock', {
  brand: Sequelize.STRING,
  product: Sequelize.STRING,
  color: Sequelize.String,
  weight: Sequelize.INTEGER,
  texture: Sequelize.STRING,
  price: Sequelize.FLOAT,
  vendorId: Sequelize.ARRAY
});

Stock.sync()
  .then(() => console.log('Votes table created'))
  .catch(err => console.error(err));

export default Stock;
