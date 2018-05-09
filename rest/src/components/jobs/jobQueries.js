const jobs = require('../../config/database/models/jobModel');

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
  return jobs.findAll();
}

module.exports.fetchJobQuery = ({jobId}) => {
  console.log(job_id);
  return jobs.findById(job_id);
}

module.exports.deleteJobQuery = ({jobId}) => {
  console.log(job_id);
  return jobs.destroy(job_id);;
}

module.exports.updateJobQuery = ({jobId}, data) => {
  console.log(jobId, data);
  return null;
}
