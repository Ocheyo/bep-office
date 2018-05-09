const jobs = require('../../config/database/models/jobModel');

module.exports.addJobQuery = (newJob) => {
  return jobs.create(
    {
      type: newJob.type,
      cost: newJob.cost,
      name: newJob.name,
      end: newJob.end,
      extras: newJob.extras,
      stock_id: newJob.stockId,
      customer_id: newJob.customer_id
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
