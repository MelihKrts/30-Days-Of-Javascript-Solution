// Day 4 Exercise Solution

// Exercise Level 2

// Exercise 2.1

const examPrompt = prompt("Enter a exam note");
const exam = examPrompt;

if (exam >= 80 && exam <= 100) {
    alert("Note : A");
}

else if (exam >= 70 && exam <= 79) {
    alert("Note : B");
}

else if (exam >= 60 && exam <= 69) {
    alert("Note : C");
}

else if (exam >= 50 && exam <= 59) {
    alert("Note : D");
}

else if (exam >= 0 && exam <= 49) {
    alert("Note : F");
}

else {
    alert("Error");
}

// Exercise 2.2

const season = prompt("Enter month name");
switch (season) {

    case "September":
    case "October":
    case "November":
        alert("The season is autumn");
        break;

    case "December":
    case "January":
    case "February":
        alert("The season is winter.");
        break;

    case "March":
    case "April":
    case "May":
        alert("The season is spring");
        break;

    case "June":
    case "July":
    case "August":
        alert("The season is summer");
        break;

    default:
        alert("Error");
        break;

}

// Exercise 2.3

const day = prompt("What is the day today?");

switch (day) {
    case "Monday":
        alert(`${day} is a working day`);
        break;

    case "Saturday":
        alert(`${day} is a working day`);
        break;

    case "Wednesday":
        alert(`${day}is a working day`);
        break;

    case "Thursday":
        alert(`${day} is a working day`);
        break;

    case "Friday":
        alert(`${day} is a working day`);
        break;

    case "Saturday":
        alert(`${day} is a weekend`)
        break;

    case "Sunday":
        alert(`${day} is a weekend`);
        break;

    default:
        alert("Error");
        break;
}
