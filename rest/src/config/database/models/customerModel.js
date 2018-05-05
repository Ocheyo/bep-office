const {db, Sequelize} = require('../index');

const Customers = db.define('customer', {
  name: Sequelize.STRING,
  contact: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.INTEGER
});

Customers.sync()
  .then(() => console.log('Customers table created'))
  .catch(err => console.error(err));

module.exports = Customers;
