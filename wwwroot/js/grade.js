var submit = document.getElementById("calcgrade");

submit.addEventListener("click", function () {
    // get all of the individual grades
    var assignments = parseInt(document.getElementById("assignments").value);
    var project = parseInt(document.getElementById("project").value);
    var quizzes = parseInt(document.getElementById("quizzes").value);
    var exams = parseInt(document.getElementById("exams").value);
    var intex = parseInt(document.getElementById("intex").value);
    // calc final grade
    var final_grade = .5 * assignments + .1 * project + .1 * quizzes + .2 * exams + .1 * intex;
    // display final grade
    alert("Final Grade: " + final_grade + "% " + letterGrade(final_grade));
});

function letterGrade(i) { // returns the corresponding letter grade
    if (i >= 93) {
        return "A";
    }
    else if (i >= 90) {
        return "A-";
    }
    else if (i >= 87) {
        return "B+";
    }
    else if (i >= 83) {
        return "B";
    }
    else if (i >= 80) {
        return "B-";
    }
    else if (i >= 77) {
        return "C+";
    }
    else if (i >= 73) {
        return "C";
    }
    else if (i >= 70) {
        return "C-";
    }
    else if (i >= 67) {
        return "D+";
    }
    else if (i >= 63) {
        return "D";
    }
    else if (i >= 60) {
        return "C-";
    }
    else {
        return "E";
    }
}