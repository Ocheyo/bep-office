const {db, Sequelize} = require('../index');

const Vendors = db.define('vendor', {
  name: Sequelize.STRING,
  salesRep: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
});

Vendors.sync()
  .then(() => console.log('Vendors table created'))
  .catch(err => console.error(err));

module.exports = Vendors;
