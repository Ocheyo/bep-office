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

router.route("/:stockId")
  .get(fetchStockController);

router.route("/:stockId")
  .delete(deleteStockController);

router.route("/:stockId")
  .put(updateStockController);

module.exports = router;
