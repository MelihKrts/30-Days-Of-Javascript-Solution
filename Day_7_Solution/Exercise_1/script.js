// Day 7 Exercise Solution

// Exercise Level 1

// Exercise 1.1

function fullName() {
    let name = "Melih";
    let surname = "Karataş";
    let space = ' ';
    let fullName = name + space + surname;
    console.log(fullName);
}

fullName();

// Exercise 1.2

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName("Melih", "Karataş"));

// Exercise 1.3

function addNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
}

console.log(addNumbers(36, 69));

// Exercise 1.4

function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}

console.log(areaOfRectangle(6, 4));

// Exercise 1.5

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(perimeterOfRectangle(8,14));

// Exercise 1.6

function volumeOfRectPrism(length, width, height) {
    let perimeter = length * width * height;
    return perimeter;
}

console.log(volumeOfRectPrism(5, 4, 3));

// Exercise 1.7

function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}

console.log(areaOfCircle(5))

// Exercise 1.8

function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r;
    return(circumference);
}
console.log(circumOfCircle(4));

// Exercise 1.9

function density(mass, volume) {
    let density = mass / volume;
    return density;
}

console.log(density(129, 87));

// Exercise 1.10

function speedCalculate(distance, time) {
    let total = distance / time;
    return total;
}

console.log(speedCalculate(48.5, 2.6));

// Exercise 1.11

function weight(mass, gravity) {
    let weight = mass * gravity;
    return weight
}

console.log(weight(11.2, 7.84));

// Exercise 1.12

function convertCelsiusToFahrenheit(celcius) {
    let franction = 9 / 5;
    let oC = (celcius * franction) + 32;
    return oC;
}

console.log(convertCelsiusToFahrenheit(1));

// Exercise 1.13

function BMI(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.4) {
        return `Your's BMI result ${bmi} According to the BMI result: Underweight`;
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your's BMI result ${bmi} According to the BMI result: Normal weight`;
    }

    else if (bmi >= 25 && bmi <= 29.9) {
        return `Your's BMI result ${bmi} According to the BMI result: Overweight`;
    }

    else (bmi >= 30)
    return `Your's BMI result ${bmi} According to the BMI result: Obese`;

}

console.log(BMI(81.68, 1.65));

// Exercise 1.14

function checkSeason(season) {
    switch (season) {
        case 'Deecember':
        case 'January':
        case 'February':
            console.log("The season Winter");
            break;

        case 'March':
        case 'April':
        case 'May':
            console.log("The season Spring");
            break;

        case 'June':
        case 'July':
        case 'August':
            console.log("The season Summer");
            break;

        case "September":
        case "October":
        case "November":
            console.log("the season is Autumn");
            break;

        default:
            console.log("Invalid value");
    }
}

checkSeason("April");

// Exercise 1.15

function findMax(numOne, numTwo, numThree) {
    if (numOne > numTwo && numOne > numThree) {
        return `${numOne}`;
    }
    else if (numTwo > numOne && numTwo > numThree) {
        return `${numTwo}`
    }
    else (numThree > numOne && numThree > numTwo)
    return `${numThree}`

}
console.log(findMax(18, 17, 17));