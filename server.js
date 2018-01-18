var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'app/public')));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);




















//My listener so my server is turned on
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });