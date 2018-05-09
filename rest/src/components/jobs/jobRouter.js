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

router.route("/:job_id")
  .get(fetchJobController);

router.route("/:job_id")
  .delete(deleteJobController);

router.route("/:job_id")
  .put(updateJobController);

module.exports = router;
