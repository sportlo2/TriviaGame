// hide quiz questions until begin quiz is selected. **********

// - Select bigin game *************
// - display div with questions (need radio button) and submit button when select begin game
// - begin countdown

// When timer runs out OR user hits submit ******

// - display out of time 
// - mark unanswered questions as incorrect 
// - display correct answers
// - display number of questions answered correctly

// begin new game button to display different questions *bonus

// ** coding begins HERE*******************************

// variables to hold HTML elemesnts
var quizContainer = $("#quiz");
var resultsContainer = $("#results");
var startBtn = $("#startQuiz");


// questions var
var quizQuestions = [
    {
        question: "How many members are in Umbrella Academy?",
        answers: ["a: 5", "b: 7", "c: 9"],
        correctAnswer: "b: 7"
    },
    {
        question: "Who is the children's father?",
        answers: ["a: Sir Reginald Hargreeves", "b: Sir Jim Ratcliff", "c: Sir Rap-A-Lot"],
        correctAnswer: "a: Sir Reginald Hargreeves"
    },
    {
        question: "Which member started a cult?",
        answers: [
            "a: Klaus",
            "b: Diego",
            "c: Allison"],
        correctAnswer: "a: Klaus"
    },
    {
        question: "Which president was Diego obsessed with rescuing?",
        answers: [
            "a: Lincoln",
            "b: Obama",
            "c: Kennedy"
        ],
        correctAnswer: "c: Kennedy"
    },
    {
        question: "What is the name of the secret society that protects the timeline?",
        answers: [
            "a: Area 51",
            "b: The Commission",
            "c: Preservation Society"
        ],
        correctAnswer: "b: The Commission"
    },
]
// create functions
//call function to start timer here. or put function here then call it
var counter = 60;




//build quiz function use function(); to display quiz
function buildQuiz() {
    //Timer goes here. prepend timer and add attributes
    startBtn.remove();

    let Timer = setInterval(function () {
        counter--;
        $("#countdown").html("<h2>Timer:" + counter);
        if (counter === 0) {
            console.log(done);
            clearInterval(Timer);
            showResults();
        }
    }, 1000);

    //$("#countdown").html(Timer);



    for (var i = 0; i < quizQuestions.length; i++) {
        quizContainer.append('<h3>' + quizQuestions[i].question + '</h3>');
        for (var j = 0; j < quizQuestions[i].answers.length; j++) {
            quizContainer.append("<input type='radio' name='question-" + i +
                "' value='" + quizQuestions[i].answers[j] + "''>" + quizQuestions[i].answers[j]);
        }
    }
    //display submit button once click begin button
    //add attribute to center button
    $("#results").html("<button id='submit'>Submit</button>");

    $("#submit").click(function () {
        console.log("this button works!");
    });
}

// begin quiz when select button
startBtn.click(buildQuiz);


//results show when user selects submit or timer runs out
function showResults() {

}
// show results when hit submit button
// submitBtn.click(showResults);

// $("#submit").on("click", function(){
//     console.log("this button works!");
// })


// // show results when timer runs out

// var endGame