export const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs);

// Exercise 2.5

// If it does not exist add Sass to the array and print the array.

const control = webTechs.includes("Sass");
console.log(control);

const added = webTechs.splice(2, 0, "Sass");
webTechs.join();

console.log(webTechs);

console.log("Sass is a CSS preprocess");