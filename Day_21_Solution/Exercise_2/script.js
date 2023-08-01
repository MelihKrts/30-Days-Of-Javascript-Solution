// Day 21 Exercise Solution

// Day 21 Exercise Level 2 Solution

// Exercise 2.1

const elementStyle = document.querySelectorAll("p");
elementStyle[0].style.color = "#00b894";
elementStyle[1].style.backgroundColor = "#fdcb6e";
elementStyle[2].style.fontFamily = "REM";
elementStyle[3].style.border = "1px solid #000000";

// Exercise 2.2

const allSelect = document.querySelectorAll("p");
allSelect.forEach((element,i) => {
    if (i % 2 == 0) {
        element.style.color = "green";
    }
    else {
        element.style.color = "red";
    }
})