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

router.route('/:vendorId')
  .get(fetchVendorController);

router.route('/:vendorId')
  .delete(deleteVendorController);

router.route('/:vendorId')
  .put(updateVendorController);

module.exports = router;
