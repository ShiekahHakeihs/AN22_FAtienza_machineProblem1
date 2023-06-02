//ITCS227 Source Code Template for 2T AY 2022-2023
/*
	Program: Computation of Grades using Function
	Programmer: Fred Dominic Atienza
	Section: AN22
	Start Date: April 17, 2023
	End Date: April 17, 2023
*/

var students = [];

function ClassPartGrade() {
    var studentName = prompt("Enter a student's name: ");
    console.log("Please enter your 5 Enabling Averages: ");
    var a = parseInt(prompt("Enter Enabling Assessment Grade 1: "));
    var b = parseInt(prompt("Enter Enabling Assessment Grade 2: "));
    var c = parseInt(prompt("Enter Enabling Assessment Grade 3: "));
    var d = parseInt(prompt("Enter Enabling Assessment Grade 4: "));
    var e = parseInt(prompt("Enter Enabling Assessment Grade 5: "));

    var sum = a + b + c + d + e;
    var CPaverage = sum / 5;

    Final(studentName, CPaverage);
}

function Final(studentName, CPaverage) {
    console.log("Please enter the Summative Grade and Final Exam Grade for the student:");
    var summativeGrade1 = parseInt(prompt("Enter Summative Assessment Grade 1: "));
    var summativeGrade2 = parseInt(prompt("Enter Summative Assessment Grade 2: "));
    var summativeGrade3 = parseInt(prompt("Enter Summative Assessment Grade 3: "));
    var finalExamGrade = parseInt(prompt("Enter Final Exam Grade: "));

    var avgSummativeGrade = (summativeGrade1 + summativeGrade2 + summativeGrade3) / 3;

    var finalGrade = (0.3 * CPaverage) + (0.5 * avgSummativeGrade) + (0.2 * finalExamGrade);
    var letterGrade = calculateLetterGrade(finalGrade);

    students.push({
        name: studentName,
        classPartGrade: CPaverage.toFixed(2),
        summativeGrade: avgSummativeGrade.toFixed(2),
        finalExamGrade: finalExamGrade.toFixed(2),
        finalGrade: finalGrade.toFixed(2),
        letterGrade: letterGrade
    });
}

function calculateLetterGrade(finalGrade) {
    if (finalGrade >= 90) {
        return "A";
    } else if (finalGrade >= 80 && finalGrade <= 89) {
        return "B";
    } else if (finalGrade >= 71 && finalGrade <= 79) {
        return "C";
    } else {
        return "F";
    }
}

function displaySummaryTable() {
    console.log("===== Summary Table =====");
    console.log("Student Name\tClass Participation\tSummative Grade\tFinal Exam Grade\tFinal Grade\tLetter Grade");
    console.log("----------------------------------------------------------------------------------------------");

    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        console.log(student.name + "\t\t" + student.classPartGrade + "\t\t\t" +
            student.summativeGrade + "\t\t" + student.finalExamGrade + "\t\t" +
            student.finalGrade + "\t\t" + student.letterGrade);
    }
}

for (var i = 0; i < 5; i++) {
    console.log("===== Student " + (i + 1) + " =====");
    ClassPartGrade();
}

displaySummaryTable();