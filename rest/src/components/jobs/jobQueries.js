const jobs = require('../../config/database/models/jobModel');

module.exports.addJobQuery = (
  {
    type,
    cost,
    price,
    name,
    end,
    extras,
    stock_id,
    customer_id
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
      stock_id,
      customer_id
    }
  );
}

module.exports.fetchAllJobsQuery = () => {
  return jobs.findAll();
}

module.exports.fetchJobQuery = ({job_id}) => {
  console.log(job_id);
  return jobs.findById(job_id);
}

module.exports.deleteJobQuery = ({job_id}) => {
  console.log(job_id);
  return jobs.destroy(job_id);;
}

module.exports.updateJobQuery = ({job_id}, data) => {
  console.log(job_id, data);
  return null;
}
