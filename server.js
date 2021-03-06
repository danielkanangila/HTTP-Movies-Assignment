const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");
const apiRouter = require("./api/apiRouter");

const app = express();

app.use(bodyParser.json());
app.use(CORS());
app.use(apiRouter);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
