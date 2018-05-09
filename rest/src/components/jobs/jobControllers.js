const {
  addJobQuery,
  fetchAllJobsQuery,
  fetchJobQuery,
  deleteJobQuery,
  updateJobQuery
} = require('./jobQueries');

module.exports.addJobController = async (req, res) => {
  try {
    const data = await addJobQuery(req.body);
    console.log("addJobController - sucessfully added data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("addJobController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.fetchAllJobsController = async (req, res) => {
  try {
    const data = await fetchAllJobsQuery();
    console.log('fetchAllJobsController - successfully retrieved data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('fetchAllJobsController - error= ', err);
    return res.status(400).send(err);
  }
}

module.exports.fetchJobController = async (req, res) => {
  try {
    const data = await fetchJobQuery(req.params);
    console.log("fetchJobController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("fetchJobController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.deleteJobController = async (req, res) => {
  try {
    const data = await deleteJobQuery(req.params);
    console.log("deleteJobController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("deleteJobController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.updateJobController = async (req, res) => {
  try {
    const data = await updateJobQuery(req.params);
    console.log("updateJobController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("updateJobController - error= ", err);
    return res.status(400).send(err);
  }
};
