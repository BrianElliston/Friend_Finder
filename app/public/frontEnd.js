console.log("Your are connected to survey.html");
      // Question: What does this code do?
      $("#submit").on("click", function(event) {
        event.preventDefault();
        var questions = {
          name: $("#name").val().trim(),
          photo: $("#photo").val().trim(),
          scores: [
            $("question1").val(),
            $("question2").val(),
            $("question3").val(),
            $("question4").val(),
            $("question5").val(),
            $("question6").val(),
            $("question7").val(),
            $("question8").val(),
            $("question9").val(),
            $("question10").val()


          ]
        
        }
        
        console.log(questions.name + questions.photo + questions.scores);
        
        $.post("survey.html")
        .then(function(data) {
          console.log(data);
          alert("Adding character...");
        });
    });
    