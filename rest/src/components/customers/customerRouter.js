const express = require('express');
const customerControllers = require('./customerControllers');

const router = express.Router();

router.route("/addCustomer")
  .post(customerControllers.addCustomerController);

router.route("/fetchCustomer/:customer_id")
  .get(customerControllers.fetchCustomerController);

router.route("/deleteCustomer/:customer_id")
  .delete(customerControllers.deleteCustomerController);

router.route("/updateCustomer/:customer_id")
  .put(customerControllers.updateCustomerController);

module.exports = router;
