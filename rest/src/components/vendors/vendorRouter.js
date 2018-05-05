const express = require('express');
const vendorControllers = require('./vendorControllers');

const router = express.Router();

router.route("/addVendor")
  .post(vendorControllers.addVendorController);

router.route("/fetchVendor/:vendor_id")
  .get(vendorControllers.fetchVendorController);

router.route("/deleteVendor/:vendor_id")
  .delete(vendorControllers.deleteVendorController);

router.route("/updateVendor/:vendor_id")
  .put(vendorControllers.updateVendorController);

module.exports = router;
