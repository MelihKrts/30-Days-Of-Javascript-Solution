// Day 11 Exercise Solution

// Day 11 Exercise Level 3 Solution

// Exercise 3.1

const countries = require('../countries_data.js');
for (const [countryKey, countryValue] of Object.entries(countries)) {
    const { name, capital, population, languages } = countryValue;

    console.log(name, capital, population, languages);
}

// Exercise 3.2

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, studentSkills, [, , jsScore, reactScore]] = student;
console.log(name, studentSkills, jsScore, reactScore);


// Exercise 3.3

function convertArrayToObject(arr) {
    const result = {};
    arr.forEach((item, index) => {
        const key = `item${index + 1}`;
        result[key] = item;
    });

    return result;
}

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const structuredObject = convertArrayToObject(students);
console.log(structuredObject);


// Exercise 3.4

const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

console.log(studentObj);

const newStudent = {
    ...studentObj,

    skills: {
        ...studentObj.skills,
        frontEnd: [
            { skill: 'Bootstrap', level: 8 },
            ...studentObj.skills.frontEnd,
        ],

        backEnd: [
            {
                skill: 'Express', level: 9
            },
            ...studentObj.skills.backEnd,
        ],

        dataBase: [
            {
                skill: 'SQL', level: 8
            },
            ...studentObj.skills.dataBase
        ],

        dataScience: [
            'SQL',
            ...studentObj.skills.dataScience
        ]
    }


};

console.log(newStudent);


var { skills } = newStudent;
console.log("Copied data", skills)

var { skills } = studentObj;
console.log("Original data", skills);







