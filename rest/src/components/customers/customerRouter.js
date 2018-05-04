import express from "express";
import { addCustomerController, fetchCustomerController, deleteCustomerController, updateCustomerController } from "./customerControllers";

const router = express.Router();

router.route("/addCustomer")
  .post(addCustomerController);

router.route("/fetchCustomer/:customer_id")
  .get(fetchCustomerController);

router.route("/deleteCustomer/:customer_id")
  .delete(deleteCustomerController);

router.route("/updateCustomer/:customer_id")
  .put(updateCustomerController);

export default router;
