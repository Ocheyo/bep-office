import { addStockQuery, fetchStockQuery, deleteStockQuery, updateStockQuery } from './stockHelpers';

export const addStockController = async (req, res) => {
  try {
    const data = await addStockQuery(req.body);
    console.log("addStockController - sucessfully added data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    console.error("addStockController - error= ", err);
    return res.status(400).send(err);
  }
};

export const fetchStockController = async (req, res) => {
  try {
    const data = await fetchStockQuery(req.params);
    console.log("fetchStockController - sucessfully retrieved data ", JSON.stringify(data.rows));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("fetchStockController - error= ", err);
    return res.status(400).send(err);
  }
};

export const deleteStockController = async (req, res) => {
  try {
    const data = await deleteStockQuery(req.params);
    console.log("deleteStockController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("deleteStockController - error= ", err);
    return res.status(400).send(err);
  }
};

export const updateStockController = async (req, res) => {
  try {
    const data = await updateStockQuery(req.params);
    console.log("updateStockController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("updateStockController - error= ", err);
    return res.status(400).send(err);
  }
};
