const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const router = require('../../routes/index');

const middleWare = [
  helmet(),
  parser.json(),
  parser.urlencoded({ extended: true }),
  cors({
    origin: '*',
    allowedHeaders: "Content-Type, Authorization",
    methods: ["GET, POST, PUT, DELETE", "OPTIONS"]
  })
];

const app = express();
app.use(...middleWare);
app.use('/api', router);

module.exports = app;
