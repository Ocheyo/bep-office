const express = require('express');
const {
  addVendorController,
  fetchAllVendorsController,
  fetchVendorController,
  deleteVendorController,
  updateVendorController
} = require('./vendorControllers');

const router = express.Router();

router.route('/')
  .post(addVendorController)
  .get(fetchAllVendorsController);

router.route('/:vendor_id')
  .get(fetchVendorController);

router.route('/:vendor_id')
  .delete(deleteVendorController);

router.route('/:vendor_id')
  .put(updateVendorController);

module.exports = router;
