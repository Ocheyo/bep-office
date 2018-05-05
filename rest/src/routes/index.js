const router = require('express').Router();

const customerRouter = require('../components/customers/customerRouter');
const jobRouter = require('../components/jobs/jobRouter');
const stockRouter = require('../components/stock/stockRouter');
const vendorRouter = require('../components/vendors/vendorRouter');

router.use("/customers", customerRouter);
router.use("/jobs", jobRouter);
router.use("/stock", stockRouter);
router.use("/vendors", vendorRouter);

module.exports = router;
