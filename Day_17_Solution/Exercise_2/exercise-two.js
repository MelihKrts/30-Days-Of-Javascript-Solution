// Day 17 Exercise Solution

// Day 17 Exercise Level 2 Solution

// Exercise Level 2 Solution

// Exercise 2.1

const student = {
    firstName: "Melih",
    lastName: "Karataş",
    age: 22,
    skills: ["HTML", "CSS", "SCSS", "Tailwind", "Bootstrap"],
    country: "Turkey"
}

const convertJSON = JSON.stringify(student);
localStorage.setItem('Student', convertJSON);