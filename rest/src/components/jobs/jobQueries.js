const jobs = require('../../config/database/models/jobModel');
const customer = require('../../config/database/models/customerModel');
const stock = require('../../config/database/models/stockModel');

module.exports.addJobQuery = (
  {
    type,
    cost,
    price,
    name,
    end,
    extras,
    stockId,
    customerId
  }
) => {
  return jobs.create(
    {
      type,
      cost,
      price,
      name,
      end,
      extras,
      stockId,
      customerId
    }
  );
}

module.exports.fetchAllJobsQuery = () => {
  return jobs.findAll({
    include: [stock, customer]
  });
}

module.exports.fetchJobQuery = ({jobId}) => {
  return jobs.findById(jobId, {
    include: [stock, customer]
  });
}

module.exports.deleteJobQuery = ({jobId}) => {
  return jobs.destroy(jobId);;
}

module.exports.updateJobQuery = ({jobId}, data) => {
  console.log(jobId, data);
  return null;
}
