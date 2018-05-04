import { db, Sequelize } from '../index';

const Vendors = db.define('vendor', {
  name: Sequelize.STRING,
  sales_rep: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.FLOAT,
});

Vendors.sync()
  .then(() => console.log('Votes table created'))
  .catch(err => console.error(err));

export default Vendors;
