// module.exports = function(app){}

// Routes
//====================================================
app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
  });
  
  app.get("/:characters", function(req, res) {
    var chosen = req.params.characters;
  
    // What does this log?
    console.log(chosen);
  
    res.end();
  });
  //=======================================================
  //THIS IS JUST COPIED AND PASTED NEEDS TO BE CLEANED UP
  //======================================================