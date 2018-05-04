import { addCustomerQuery, fetchCustomerQuery, deleteCustomerQuery, updateCustomerQuery } from './customerHelpers';

export const addCustomerController = async (req, res) => {
  try {
    const data = await addCustomerQuery(req.body);
    console.log("addCustomerController - sucessfully added data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    console.error("addCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

export const fetchCustomerController = async (req, res) => {
  try {
    const data = await fetchCustomerQuery(req.params);
    console.log("fetchCustomerController - sucessfully retrieved data ", JSON.stringify(data.rows));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("fetchCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

export const deleteCustomerController = async (req, res) => {
  try {
    const data = await deleteCustomerQuery(req.params);
    console.log("deleteCustomerController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("deleteCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};

export const updateCustomerController = async (req, res) => {
  try {
    const data = await updateCustomerQuery(req.params);
    console.log("updateCustomerController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("updateCustomerController - error= ", err);
    return res.status(400).send(err);
  }
};
