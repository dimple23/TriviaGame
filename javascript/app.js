var number = 25;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

// Questions array
var questions = [{
    question: "<p>What is the Capital of USA?</p>",
    answerList: ["Washington D.C","New York","London","Canada"],
    answer: 0
},{
    question: "<p>How many Countries are there in North America?</p>",
    answerList: ["18","23","33","37"],
    answer: 1
},{
    question: "<p>When was the Statue of Liberty dedicated ?</p>",
    answerList: ["October 18,1886", "November 21,1885", "October 28,1886", "November 27,1886"],
    answer: 2
},{
    question: "<p>What replaces the Twin Towers?</p> ",
    answerList: ["Empire State Building", "World Trade Center", "Chrysler Building", "30 Hudson Yards"],
    answer: 1
},{
    question: "<p>Who is the President of USA?</p>",
    answerList: ["Barack Obama", "George Washington", "Thomas Jefferson", "Donald Trump"],
    answer: 3
},{
    question: "<p>How many Colors are in a Rainbow?</p>",
    answerList: ["8", "7", "6", "9"],
    answer: 1
},{
    question: "<p>What is the Capital of England?</p>",
    answerList: ["London", "Washington", "Canada", "Australia"],
    answer: 0
 },{
  question: "<p>Who invented the Telephone?</p>",
  answerList: ["Thomas Edison", "Alexander Graham Bell", "Galileo Galilei", "Robert Hooke"],
  answer: 1
 },{

  question: "<p>What is the top color in a Rainbow?</p>",
      answerList: ["Red", "Green", "Yellow", "Violet"],
      answer: 0
 },{

  question: "<p>Which planet is closest to the Earth?</p>",
      answerList: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: 0

      
}];

$("#start").on("click", function() {

    // Hide Start button
    $(this).hide();
    $("#img").hide();
    $("#img1").hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 25 Seconds</h2>" + "<br>");

    // Start timer countdown
    run();

    // Display questions --- I still want to turn this into a reusable piece so that i don't have to repeat this section for each question
    // Question 1
    $("#question1").html("<h3>" + questions[0].question + "</h3>");
    $("#answer1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[0].answerList[0] + "</label>"
        + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[0].answerList[1] + "</label>"
        + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[0].answerList[2] + "</label>"
        + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[0].answerList[3] + "</label><br><br>"
    );

    // Question 2
    $("#question2").html("<h3>" + questions[1].question + "</h3>");
    $("#answer2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[1].answerList[0] + "</label>"
        + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[1].answerList[1] + "</label>"
        + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[1].answerList[2] + "</label>"
        + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[1].answerList[3] + "</label><br><br>"
    );

    // Question 3
    $("#question3").html("<h3>" + questions[2].question + "</h3>");
    $("#answer3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[2].answerList[0] + "</label>"
        + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[2].answerList[1] + "</label>"
        + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[2].answerList[2] + "</label>"
        + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[2].answerList[3] + "</label><br><br>"
    );

    // Question 4
    $("#question4").html("<h3>" + questions[3].question + "</h3>");
    $("#answer4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[3].answerList[0] + "</label>"
        + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[3].answerList[1] + "</label>"
        + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[3].answerList[2] + "</label>"
        + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[3].answerList[3] + "</label><br><br>"
    );

    // Question 5
    $("#question5").html("<h3>" + questions[4].question + "</h3>");
    $("#answer5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[4].answerList[0] + "</label>"
        + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[4].answerList[1] + "</label>"
        + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[4].answerList[2] + "</label>"
        + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[4].answerList[3] + "</label><br><br>"
    );
    // Question 6
    $("#question6").html("<h3>" + questions[5].question + "</h3>");
    $("#answer6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[5].answerList[0] + "</label>"
        + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[5].answerList[1] + "</label>"
        + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[5].answerList[2] + "</label>"
        + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[5].answerList[3] + "</label><br><br>"
    );
    // Question 7
    $("#question7").html("<h3>" + questions[6].question + "</h3>");
    $("#answer7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[6].answerList[0] + "</label>"
        + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[6].answerList[1] + "</label>"
        + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[6].answerList[2] + "</label>"
        + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[6].answerList[3] + "</label><br><br>"
    );
    // Question 8
    $("#question8").html("<h3>" + questions[7].question + "</h3>");
    $("#answer8").html("<input type='radio' name='answer8' value='0'>" + "<label>" + questions[7].answerList[0] + "</label>"
        + "<input type='radio' name='answer8' value='1'>" + "<label>" + questions[7].answerList[1] + "</label>"
        + "<input type='radio' name='answer8' value='2'>" + "<label>" + questions[7].answerList[2] + "</label>"
        + "<input type='radio' name='answer8' value='3'>" + "<label>" + questions[7].answerList[3] + "</label><br><br>"
    );
    // Question 9
    $("#question9").html("<h3>" + questions[8].question + "</h3>");
    $("#answer9").html("<input type='radio' name='answer9' value='0'>" + "<label>" + questions[8].answerList[0] + "</label>"
        + "<input type='radio' name='answer9' value='1'>" + "<label>" + questions[8].answerList[1] + "</label>"
        + "<input type='radio' name='answer9' value='2'>" + "<label>" + questions[8].answerList[2] + "</label>"
        + "<input type='radio' name='answer9' value='3'>" + "<label>" + questions[8].answerList[3] + "</label><br><br>"
    );
    // Question 10
    $("#question10").html("<h3>" + questions[9].question + "</h3>");
    $("#answer10").html("<input type='radio' name='answer10' value='0'>" + "<label>" + questions[9].answerList[0] + "</label>"
        + "<input type='radio' name='answer10' value='1'>" + "<label>" + questions[9].answerList[1] + "</label>"
        + "<input type='radio' name='answer10' value='2'>" + "<label>" + questions[9].answerList[2] + "</label>"
        + "<input type='radio' name='answer10' value='3'>" + "<label>" + questions[9].answerList[3] + "</label><br><br><br><br>"
    );
    

    // Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");
    
    
    // Click event runs keepingScore() and displayResults() when user clicks Done button
    $("#done").on("click", function() {
         // Keeping track of score based on correct, incorrect, and unanswered
        keepingScore();

        // Display 
        displayResults();
        $("#img").hide();
        $("#question8").hide();
        $("#question9").hide();
        $("#question10").hide();
        $("#play").hide();
        $("#img1").hide();

    });
});

// Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        // Run stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  Clears intervalId
    clearInterval(intervalId);
}

// Function used for displaying results in terms of correct, incorrect, and unanswered --- I want to put all of these tags inside a div so that i can just hide the parent div
function displayResults() {

    $("#time").hide();
    $("#question1").hide();
    $("#answer1").hide();
    $("#question2").hide();
    $("#answer2").hide();
    $("#question3").hide();
    $("#answer3").hide();
    $("#question4").hide();
    $("#answer4").hide();
    $("#question5").hide();
    $("#answer5").hide();
    $("#question6").hide();
    $("#answer6").hide();
    $("#question7").hide();
    $("#answer7").hide();
    $("#submit").hide();
    $("#answer8").hide();
    $("#submit").hide();
    $("#answer9").hide();
    $("#submit").hide();
    $("#answer10").hide();
    $("#submit").hide();
    $("#img1").show();
    $("#question8").hide();
    $("#question9").hide();
    $("#question10").hide();
    $("#good").hide();

    $("#resultsMessage").html("<h3>Time Up!</h3>");
    $("#resultsMessage").html("<h3>Game Over!!</h3>");
    $("#resultsMessage").html("<h3>Let's see how you did </h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
    
}

// Function keeps score in terms of correct, incorrect, and unanswered --- I still want to make this a reusable piece so that I don't have to repeat it for each question
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();
    var userAnswer8 = $("input[name='answer8']:checked").val();
    var userAnswer9 = $("input[name='answer9']:checked").val();
    var userAnswer10 = $("input[name='answer10']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
    // Question 8
    if (userAnswer8 === undefined) {

      unanswered++;
  }
  else if (userAnswer8 == questions[7].answer) {

      correctAnswers++;
  }
  else {

      incorrectAnswers++;
  }  
  // Question 9
  if (userAnswer9 === undefined) {

    unanswered++;
}
else if (userAnswer9 == questions[8].answer) {

    correctAnswers++;
}
else {

    incorrectAnswers++;
}  
// Question 10
if (userAnswer10 === undefined) {

  unanswered++;
}
else if (userAnswer10 == questions[9].answer) {

  correctAnswers++;
}
else {

  incorrectAnswers++;
}  

} 