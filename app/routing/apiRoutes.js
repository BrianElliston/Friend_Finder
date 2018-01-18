var friends = require("../data/friends");

module.exports = function(app){




  
  app.get("/:characters", function(req, res) {
    var responses = req.params.characters;
  
    console.log(responses);
  
    res.end();
  });

  app.post("/survey.html", function(req, res){

    res.send("Bob");
  })

}




