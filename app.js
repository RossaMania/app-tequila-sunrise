const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  res.send("Hello");
});





app.listen(process.env.PORT || 3000, function () {

  console.log("Server is running!");

});