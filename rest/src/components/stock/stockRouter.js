const express = require('express');
const stockControllers = require('./stockControllers');

const router = express.Router();

router.route("/addStock")
  .post(stockControllers.addStockController);

router.route("/fetchStock/:stock_id")
  .get(stockControllers.fetchStockController);

router.route("/deleteStock/:stock_id")
  .delete(stockControllers.deleteStockController);

router.route("/updateStock/:stock_id")
  .put(stockControllers.updateStockController);

module.exports = router;
