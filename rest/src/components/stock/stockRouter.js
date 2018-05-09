const express = require('express');
const stockControllers = require('./stockControllers');

const router = express.Router();

router.route("/")
  .post(stockControllers.addStockController)
  .get(stockControllers.fetchAllStockController);

router.route("/:stock_id")
  .get(stockControllers.fetchStockController);

router.route("/:stock_id")
  .delete(stockControllers.deleteStockController);

router.route("/:stock_id")
  .put(stockControllers.updateStockController);

module.exports = router;
