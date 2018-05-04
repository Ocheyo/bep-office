import express from "express";
import { addStockController, fetchStockController, deleteStockController, updateStockController } from "./stockControllers";

const router = express.Router();

router.route("/addStock")
  .post(addStockController);

router.route("/fetchStock/:stock_id")
  .get(fetchStockController);

router.route("/deleteStock/:stock_id")
  .delete(deleteStockController);

router.route("/updateStock/:stock_id")
  .put(updateStockController);

export default router;
