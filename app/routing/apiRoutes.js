var friends = require("../data/friends");

module.exports = function(app){




  
  app.get("/:characters", function(req, res) {
    var responses = req.params.characters;
  
    console.log(responses);
  
    res.end();
  });

  app.post("/survey.html", function(req, res){
//get data out of req.body
//loop through friends array
//compare data in req.body to the ones in friends
//keep running total of numerical distance for each question
//this friend is is your best so far update which will be a variable
//return that variable (probably res.json)
//create module on other end (frontEnd.js)
    res.send("Bob");
  })

}




