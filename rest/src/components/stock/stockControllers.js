const stockQueries = require('./stockQueries');

module.exports.addStockController = async (req, res) => {
  try {
    const data = await stockQueries.addStockQuery(req.body);
    console.log("addStockController - sucessfully added data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    console.error("addStockController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.fetchStockController = async (req, res) => {
  try {
    const data = await stockQueries.fetchStockQuery(req.params);
    console.log("fetchStockController - sucessfully retrieved data ", JSON.stringify(data.rows));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("fetchStockController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.deleteStockController = async (req, res) => {
  try {
    const data = await stockQueries.deleteStockQuery(req.params);
    console.log("deleteStockController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("deleteStockController - error= ", err);
    return res.status(400).send(err);
  }
};

module.exports.updateStockController = async (req, res) => {
  try {
    const data = await stockQueries.updateStockQuery(req.params);
    console.log("updateStockController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("updateStockController - error= ", err);
    return res.status(400).send(err);
  }
};
