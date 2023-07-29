// Day 19 Exercise Solution

// Day 19 Exercise Level 1 Solution

// Exercise 1.1

function outerFunction() {
    let number = 0;
    function innerFunction() {
        number++
        return number
    }
    return innerFunction
}

const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());

