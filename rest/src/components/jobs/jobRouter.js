const express = require('express');
const jobControllers = require('./jobControllers');

const router = express.Router();

router.route("/addJob")
  .post(jobControllers.addJobController);

router.route("/fetchJob/:job_id")
  .get(jobControllers.fetchJobController);

router.route("/deleteJob/:job_id")
  .delete(jobControllers.deleteJobController);

router.route("/updateJob/:job_id")
  .put(jobControllers.updateJobController);

module.exports = router;
