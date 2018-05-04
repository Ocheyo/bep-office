import express from "express";
import { addVendorController, fetchVendorController, deleteVendorController, updateVendorController } from "./vendorControllers";

const router = express.Router();

router.route("/addVendor")
  .post(addVendorController);

router.route("/fetchVendor/:vendor_id")
  .get(fetchVendorController);

router.route("/deleteVendor/:vendor_id")
  .delete(deleteVendorController);

router.route("/updateVendor/:vendor_id")
  .put(updateVendorController);

export default router;
