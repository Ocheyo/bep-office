const {
  addCustomerQuery,
  fetchAllCustomersQuery,
  fetchCustomerQuery,
  deleteCustomerQuery,
  updateCustomerQuery
} = require('./customerQueries');

module.exports.addCustomerController = async (req, res) => {
  try {
    const data = await addCustomerQuery(req.body);
    console.log("addCustomerController - sucessfully added data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("addCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.fetchAllCustomersController = async (req, res) => {
  try {
    const data = await fetchAllCustomersQuery();
    console.log('fetchAllCustomersController - successfully retreived data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('fetchAllCustomersController - error=', err);
    return res.status(400).send(err);
  }
};

module.exports.fetchCustomerController = async (req, res) => {
  try {
    console.log('parameters', req.params)
    const data = await fetchCustomerQuery(req.params);
    console.log("fetchCustomerController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("fetchCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.deleteCustomerController = async (req, res) => {
  try {
    const data = await deleteCustomerQuery(req.params);
    console.log("deleteCustomerController - sucessfully retrieved data ", JSON.stringify(data));
    return res.sendStatus(200);
  } catch (err) {
    console.error("deleteCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.updateCustomerController = async (req, res) => {
  try {
    const data = await updateCustomerQuery(req.params, req.body);
    console.log("updateCustomerController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("updateCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};
