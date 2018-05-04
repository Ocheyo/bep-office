import express from "express";
import { addJobController, fetchJobController, deleteJobController, updateJobController } from "./jobControllers";

const router = express.Router();

router.route("/addJob")
  .post(addJobController);

router.route("/fetchJob/:job_id")
  .get(fetchJobController);

router.route("/deleteJob/:job_id")
  .delete(deleteJobController);

router.route("/updateJob/:job_id")
  .put(updateJobController);

export default router;
