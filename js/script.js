var allQuestions = [{
    question: "What tags contain the JavaScript code?",
    choices: ["script.", "body.", "link"],
    correctAnswer: 0
},
{
    question: "Which one is a core language in web pages?",
    choices: ["ruby.", "java.", "Javascript."],
    correctAnswer: 2
},
{
    question: " Why is the script tag placed just before the closing body tag?",
    choices: ["just for fun", "to let the html code run first", "to comply with the standards"],
    correctAnswer: 1
},
{
    question: "What characters can not be used in variable names? ",
    choices: ["letters", "numbers", "underscore sign"],
    correctAnswer: 1
    
},
{
    question: "What is a floating point number?",
    choices: [" is always smaller than 0", " is always positive", "is allowed to have a decimal place"],
    correctAnswer: 2
}
]
var currentquestion = 0;
var correctAnswers = 0;
function setupOptions() {
    $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
    var options = allQuestions[currentquestion].choices;
    var formHtml = '';
    for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"<label for="option' + i + '">' +
            allQuestions[currentquestion].choices[i] + '</label></div><br/>';
    }
    $('#form').html(formHtml);
    $("#option0").prop('checked', true);
};
function checkAns() {
    if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
        correctAnswers++;
    };
};
$(document).ready(function () {
    $(".jumbotron").hide();
    $(".well").hide()
    $('#start').click(function () {
        $(".jumbotron").fadeIn();
        $(".well").fadeIn();
        $(this).hide();
    });
    setupOptions();
    $("#next").click(function () {
        event.preventDefault();
        checkAns();
        currentquestion++;
        if (currentquestion < allQuestions.length) {
            setupOptions();
            if (currentquestion == allQuestions.length - 1) {
                $('#next').html("Submit");
                $('#next').click(function () {
                    $("#result").html("You correctly answered  " + correctAnswers * 1 + " out of " + currentquestion * 1);
                    $("#result").fadeIn();
                });
            };
        };
    });
});
