import { addJobQuery, fetchJobQuery, deleteJobQuery, updateJobQuery } from './jobHelpers';

export const addJobController = async (req, res) => {
  try {
    const data = await addJobQuery(req.body);
    console.log("addJobController - sucessfully added data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    console.error("addJobController - error= ", err);
    return res.status(400).send(err);
  }
};

export const fetchJobController = async (req, res) => {
  try {
    const data = await fetchJobQuery(req.params);
    console.log("fetchJobController - sucessfully retrieved data ", JSON.stringify(data.rows));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("fetchJobController - error= ", err);
    return res.status(400).send(err);
  }
};

export const deleteJobController = async (req, res) => {
  try {
    const data = await deleteJobQuery(req.params);
    console.log("deleteJobController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("deleteJobController - error= ", err);
    return res.status(400).send(err);
  }
};

export const updateJobController = async (req, res) => {
  try {
    const data = await updateJobQuery(req.params);
    console.log("updateJobController - sucessfully retrieved data ", JSON.stringify(data.rows[0]));
    return res.status(200).send(data.rows);
  } catch (err) {
    console.error("updateJobController - error= ", err);
    return res.status(400).send(err);
  }
};
