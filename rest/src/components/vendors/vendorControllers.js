import { addVendorQuery, fetchVendorQuery, deleteVendorQuery, updateVendorQuery } from './vendorHelpers';

export const addVendorController = async (req, res) => {
  try {
    const data = await addVendorQuery(req.body);
    console.log("addVendorController - sucessfully added data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    console.error("addVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

export const fetchVendorController = async (req, res) => {
  try {
    const data = await fetchVendorQuery(req.params);
    console.log("fetchVendorController - sucessfully retrieved data ", JSON.stringify(data.rows));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("fetchVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

export const deleteVendorController = async (req, res) => {
  try {
    const data = await deleteVendorQuery(req.params);
    console.log("deleteVendorController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("deleteVendorController - error= ", err);
    return res.status(400).send(err);
  }
};

export const updateVendorController = async (req, res) => {
  try {
    const data = await updateVendorQuery(req.params);
    console.log("updateVendorController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("updateVendorController - error= ", err);
    return res.status(400).send(err);
  }
};
