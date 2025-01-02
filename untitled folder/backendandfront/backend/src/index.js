const express = require("express");
const app = express();
const router = require("../route/userRoutes");
const connect = require("../config/db");
const bodyParser = require("body-parser");
PORT = 3001;

const cors = require("cors");
app.use(cors()); // Replace with your frontend origin

// Middleware
app.use(bodyParser.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies

app.use("/", router);

connect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});