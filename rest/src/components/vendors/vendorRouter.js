const express = require('express');
const vendorControllers = require('./vendorControllers');

const router = express.Router();

router.route('/')
  .post(vendorControllers.addVendorController)
  .get(vendorControllers.fetchAllVendorsController);

router.route('/:vendor_id')
  .get(vendorControllers.fetchVendorController);

router.route('/:vendor_id')
  .delete(vendorControllers.deleteVendorController);

router.route('/:vendor_id')
  .put(vendorControllers.updateVendorController);

module.exports = router;
