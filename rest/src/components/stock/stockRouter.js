const express = require('express');
const {
  addStockController,
  fetchAllStockController,
  fetchStockController,
  deleteStockController,
  updateStockController
} = require('./stockControllers');

const router = express.Router();

router.route("/")
  .post(addStockController)
  .get(fetchAllStockController);

router.route("/:stock_id")
  .get(fetchStockController);

router.route("/:stock_id")
  .delete(deleteStockController);

router.route("/:stock_id")
  .put(updateStockController);

module.exports = router;
