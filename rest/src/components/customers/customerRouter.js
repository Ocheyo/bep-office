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

router.route('/:customer_id')
  .get(fetchCustomerController);

router.route('/:customer_id')
  .delete(deleteCustomerController);

router.route('/:customer_id')
  .put(updateCustomerController);

module.exports = router;
