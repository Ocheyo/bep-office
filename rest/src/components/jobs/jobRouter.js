const express = require('express');
const {
  addJobController,
  fetchAllJobsController,
  fetchJobController,
  deleteJobController,
  updateJobController
} = require('./jobControllers');

const router = express.Router();

router.route("/")
  .post(addJobController)
  .get(fetchAllJobsController);

router.route("/:jobId")
  .get(fetchJobController);

router.route("/:jobId")
  .delete(deleteJobController);

router.route("/:jobId")
  .put(updateJobController);

module.exports = router;
