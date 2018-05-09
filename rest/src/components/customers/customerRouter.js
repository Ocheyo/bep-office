const express = require('express');
const customerControllers = require('./customerControllers');

const router = express.Router();

router.route('/')
  .get(customerControllers.fetchAllCustomers)
  .post(customerControllers.addCustomerController);

router.route('/:customer_id')
  .get(customerControllers.fetchCustomerController);

router.route('/:customer_id')
  .delete(customerControllers.deleteCustomerController);

router.route('/:customer_id')
  .put(customerControllers.updateCustomerController);

module.exports = router;
