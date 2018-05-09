const express = require('express');
const jobControllers = require('./jobControllers');

const router = express.Router();

router.route("/")
  .post(jobControllers.addJobController)
  .get(jobControllers.fetchAllJobsController);

router.route("/:job_id")
  .get(jobControllers.fetchJobController);

router.route("/:job_id")
  .delete(jobControllers.deleteJobController);

router.route("/:job_id")
  .put(jobControllers.updateJobController);

module.exports = router;
