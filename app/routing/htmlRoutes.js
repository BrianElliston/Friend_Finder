
// A GET Route to /survey which should display the survey page. A default, catch-all route that leads to home.html which displays the home page. Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below. 
var path = require("path");


module.exports = function(app){




// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Are You Lonely?")
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  app.get('/survey', (req, res) => {res.sendFile(path.join(__dirname, "../public/survey.html"));
  
  })


  
  









}