// Day 16 Solution

// Day 16 Solution Exercise Level 2 Solution

// Exercise 2.1

const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

const selectJSONKey = JSON.stringify(student,['firstName', 'lastName', 'skills']);
console.log(selectJSONKey);