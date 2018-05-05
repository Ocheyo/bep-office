const customerQueries = require('./customerQueries');

module.exports.addCustomerController = async (req, res) => {
  try {
    const data = await cusotmerQueries.addCustomerQuery(req.body);
    console.log("addCustomerController - sucessfully added data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    console.error("addCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.fetchCustomerController = async (req, res) => {
  try {
    const data = await customerQueries.fetchCustomerQuery(req.params);
    console.log("fetchCustomerController - sucessfully retrieved data ", JSON.stringify(data.rows));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("fetchCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.deleteCustomerController = async (req, res) => {
  try {
    const data = await customerQueries.deleteCustomerQuery(req.params);
    console.log("deleteCustomerController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("deleteCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.updateCustomerController = async (req, res) => {
  try {
    const data = await customerQueries.updateCustomerQuery(req.params);
    console.log("updateCustomerController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("updateCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};
