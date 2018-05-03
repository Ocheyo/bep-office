import express from "express";
import parser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import router from "../../routes/index";

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

export default app;
