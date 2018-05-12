const {db, Sequelize} = require('../index');
const Customer = require('./customerModel');
const Stock = require('./stockModel');

const Job = db.define('job', {
  name: Sequelize.STRING,
  customerId: Sequelize.INTEGER,
  stockId: Sequelize.INTEGER,
  end: Sequelize.DATE,
  cost: Sequelize.FLOAT,
  price: Sequelize.FLOAT,
  type: Sequelize.STRING,
  extras: Sequelize.TEXT
});

Job.belongsTo(Customer);
Job.belongsTo(Stock);

Job.sync()
  .then(() => console.log('Jobs table created'))
  .catch(err => console.error(err));

module.exports = Job;
