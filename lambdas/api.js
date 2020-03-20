const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");
const apiRouter = require("../api/apiRouter");

const app = express();

app.use(bodyParser.json());
app.use(CORS());
app.use("/http-movies", apiRouter);

module.exports = apiRouter;