var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;











// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Are You Lonely?")
  res.sendFile(path.join(__dirname, "home.html"));
});






//My listener so my server is turned on
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });