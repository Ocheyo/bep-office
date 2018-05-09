const {
  addVendorQuery,
  fetchAllVendorsQuery,
  fetchVendorQuery,
  deleteVendorQuery,
  updateVendorQuery
} = require('./vendorQueries');

module.exports.addVendorController = async (req, res) => {
  console.log(req.body);
  try {
    const data = await addVendorQuery(req.body);
    console.log("addVendorController - sucessfully added data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("addVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.fetchAllVendorsController = async (req, res) => {
  try {
    const data = await fetchAllVendorsQuery();
    console.log("fetchAllVendorsController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("fetchVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.fetchVendorController = async (req, res) => {
  console.log(req.params);
  try {
    const data = await fetchVendorQuery(req.params);
    console.log("fetchVendorController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("fetchVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.deleteVendorController = async (req, res) => {
  try {
    const data = await deleteVendorQuery(req.params);
    console.log("deleteVendorController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("deleteVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.updateVendorController = async (req, res) => {
  try {
    const data = await updateVendorQuery(req.params);
    console.log("updateVendorController - sucessfully retrieved data ", JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error("updateVendorController - error= ", err);
    return res.status(400).send(err);
  }
};
