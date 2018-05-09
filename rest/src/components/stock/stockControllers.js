const {
  addStockQuery,
  fetchAllStockQuery,
  fetchStockQuery,
  deleteStockQuery,
  updateStockQuery
} = require('./stockQueries');

module.exports.addStockController = async (req, res) => {
  try {
    const data = await addStockQuery(req.body);
    console.log('addStockController - sucessfully added data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('addStockController - error= ', err);
    return res.status(400).send(err);
  }
};

module.exports.fetchAllStockController = async (req, res) => {
  try {
    const data = await fetchAllStockQuery();
    console.log('fetchAllStockController - successfully retrieved data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('fetchAllStockController - error= ', err);
    return res.status(400).send(err);
  }
}

module.exports.fetchStockController = async (req, res) => {
  try {
    const data = await fetchStockQuery(req.params);
    console.log('fetchStockController - sucessfully retrieved data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('fetchStockController - error= ', err);
    return res.status(400).send(err);
  }
};

module.exports.deleteStockController = async (req, res) => {
  try {
    const data = await deleteStockQuery(req.params);
    console.log('deleteStockController - sucessfully retrieved data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('deleteStockController - error= ', err);
    return res.status(400).send(err);
  }
};

module.exports.updateStockController = async (req, res) => {
  try {
    const data = await updateStockQuery(req.params);
    console.log('updateStockController - sucessfully retrieved data ', JSON.stringify(data));
    return res.status(200).send(data);
  } catch (err) {
    console.error('updateStockController - error= ', err);
    return res.status(400).send(err);
  }
};
