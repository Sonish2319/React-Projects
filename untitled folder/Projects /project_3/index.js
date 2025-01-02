var express = require("express");

var app = express();

var bodyparser = require("body-parser");

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/register", function (req, res) {
  res.sendFile(__dirname + "/register.html");
});

app.post("/form-submit", function (req, res) {

  // const data = req.body;
  // console.log(data.name)
  // console.log(data.email)

  res.send(req.body);
});

app.listen(9000);
