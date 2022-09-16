const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("origins");
});

app.get("/origins", function(req, res){
  res.render("origins");
});

app.get("/making-it", function(req, res){
  res.render("making-it");
});

app.get("/serving-it", function(req, res){
  res.render("serving-it");
});

app.get("/remixes", function(req, res){
  res.render("remixes");
});

app.get("/conversation-starters", function(req, res){
  res.render("conversation-starters");
});


app.listen(process.env.PORT || 3000, function () {

  console.log("Server is running!");

});