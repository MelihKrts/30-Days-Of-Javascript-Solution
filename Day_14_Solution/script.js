// Day 14 Exercise Solution

// Day 14 Exercise Level 1 Solution

// Exercise 1 // Reference Error

try {
    let lastName = "Melih";
    let fullName = firstName + ' ' + lastName;

} catch (err) {
    console.log(err)
}

// Exercise 2 // TypeError Assignment to constant variable

const gravity = 9.81;
try {
    gravity = 2.76;
} catch (err) {
    console.log(err);
}

// Exercise 3 // TypeError: number.toUpperCase is not a function

try {
    let number = 9;
    let result = number.toUpperCase();
} catch (error) {
    console.log(error);
}

