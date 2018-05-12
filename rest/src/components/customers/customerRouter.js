const express = require('express');
const {
  addCustomerController,
  fetchAllCustomersController,
  fetchCustomerController,
  deleteCustomerController,
  updateCustomerController
} = require('./customerControllers');

const router = express.Router();

router.route('/')
  .get(fetchAllCustomersController)
  .post(addCustomerController);

router.route('/:customerId')
  .get(fetchCustomerController);

router.route('/:customerId')
  .delete(deleteCustomerController);

router.route('/:customerId')
  .put(updateCustomerController);

module.exports = router;
