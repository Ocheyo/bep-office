const router = require('express').Router();

const customerRouter = require('../components/customers/customerRouter');
const vendorRouter = require('../components/vendors/vendorRouter');
const stockRouter = require('../components/stock/stockRouter');
const jobRouter = require('../components/jobs/jobRouter');

router.use("/customers", customerRouter);
router.use("/jobs", jobRouter);
router.use("/stock", stockRouter);
router.use("/vendors", vendorRouter);

module.exports = router;
