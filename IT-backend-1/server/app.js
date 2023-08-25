if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const { errorHandler } = require("./middlewares/errorHandler");
const router = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app running on port ${port}`);
});

module.exports = app;
