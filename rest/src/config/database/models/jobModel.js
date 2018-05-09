const {db, Sequelize} = require('../index');

const Jobs = db.define('job', {
  name: Sequelize.STRING,
  customer_id: Sequelize.INTEGER,
  stock_id: Sequelize.INTEGER,
  end: Sequelize.DATE,
  cost: Sequelize.FLOAT,
  price: Sequelize.FLOAT,
  type: Sequelize.STRING,
  extras: Sequelize.TEXT
});

Jobs.sync()
  .then(() => console.log('Jobs table created'))
  .catch(err => console.error(err));

module.exports = Jobs;
