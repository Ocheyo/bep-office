import { db, Sequelize } from '../index';

const Jobs = db.define('job', {
  name: Sequelize.STRING,
  customer_id: Sequelize.INTEGER,
  stock_id: Sequelize.INTEGER,
  begin: Sequelize.DATE,
  end: Sequelize.DATE,
  cost: Sequelize.FLOAT,
  price: Sequelize.FLOAT,
  type: Sequelize.STRING,
  extras: Sequelize.ARRAY
});

Votes.sync()
  .then(() => console.log('Votes table created'))
  .catch(err => console.error(err));

export default Votes;
