// function gradeMe() {

//     var total = 5;
//     var score = 0;

//     var q1 = document.getElementsByName('q1').value.toString();
//     var q2 = document.getElementsByName('q2').value.toString();
//     var q3 = document.getElementsByName('q3').value.toString();
//     var q4 = document.getElementsByName('q4').value.toString();
//     var q5 = document.getElementsByName('q5').value.toString();

//     var questionArray = [q1, q2, q3, q4, q5];

//     for (var i = 0; i <= questionArray.length; i++) {
//         if (questionArray[i] === null || questionArray[i] === '') {
//             alert("Oops!  You forgot to answer a question.  Please enter an answer for Question " + [i + 1] + ".");
//             return false;
//         }
//     }


//     //Set correct Answers
//     var answers = ["b", "a", "d", "b", "d"];

//     //Check for correct answers
//     for (var i + 0; i <= total.length; i++) {
//         if (questionArray[i] === answers[i]) {
//             score = score + 1;
//         }
//     }
//     alert("Your score is" + score + "out of" + total);

//     return false;
// }

function gradeMe() {
    var ansOne = document.querySelector('input[name="q1"]:checked').value;
    var ansTwo = document.querySelector('input[name="q2"]:checked').value;
    var ansThree = document.querySelector('input[name="q3"]:checked').value;
    var ansFour = document.querySelector('input[name="q4"]:checked').value;
    var ansFive = document.querySelector('input[name="q5"]:checked').value;
    var correctScore = 0;


    if (ansOne === "d") {
        correctScore += 10;
    }
    if (ansTwo === "a") {
        correctScore += 10;
    }
    if (ansThree === "c") {
        correctScore += 10;
    }
    if (ansFour === "b") {
        correctScore += 10;
    }
    if (ansFive === "d") {
        correctScore += 10;
    }
    alert(correctScore);
}