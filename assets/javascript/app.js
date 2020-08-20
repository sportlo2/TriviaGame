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

// ** coding begins HERE

// variables to hold HTML elemesnts

var quizContainer = $("#quiz");
var submitBtn = $("#submit");
var resultsContainer = $("#results");
var startBtn = $("#startQuiz");
// create functions

//build quiz function use function(); to display quiz
function buildQuiz(){

}

 // begin quiz when select button
startBtn.click(buildQuiz);

//results show when user selects submit or timer runs out
function showResults() {

}

// show results when hit submit button
submitBtn.click(showResults);

// show results when timer runs out

// questions var

var questions = [
    {
        question: "How many members are in Umbrella Academy?",
        answers: {
        a: "5",
        b: "7",
        c: "9"
        },
        correctAnswer: "b"
    },

    {
        question: "Who is the children's father?",
        answers: {
        a: "Sir Reginald Hargreeves",
        b: "Sir Jim Ratcliff",
        c: "Sir Rap-A-Lot"
        },
        correctAnswer: "a"
    },

    {
        question: "Which member started a cult?",
        answers: {
        a: "Klaus",
        b: "Diego",
        c: "Allison"
        },
        correctAnswer: "a"
    },

    {
        question: "Which president was Diego obsessed with rescuing?",
        answers: {
        a: "Lincoln",
        b: "Obama",
        c: "Kennedy"
        },
        correctAnswer: "c"
    },

    {
        question: "What is the name of the secret society that protects the timeline?",
        answers: {
        a: "Area 51",
        b: "The Commission",
        c: "Preservation Society"
        },
        correctAnswer: "b"
    },
]