// Day 5 Exercise Solution 

// Exercise Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age

const sorted = ages.sort();
console.log(sorted);
console.log(Math.min(...ages));
console.log(Math.max(...ages));

// Find the median age(one middle item or two middle items divided by two)

// https://www.geeksforgeeks.org/how-to-get-median-of-an-array-of-numbers-in-javascript/

function medianof2Arr(ages) {
    var concat = ages;
    concat = concat.sort(
        function (a, b) { return a - b });

    // console.log(concat);
    var length = concat.length;

    if (length % 2 == 1) {

        // If length is odd
        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]

    }
    else {
        console.log((concat[length / 2]
            + concat[(length / 2) - 1]) / 2);

        return (concat[length / 2]
            + concat[(length / 2) - 1]) / 2;
    }
}

medianof2Arr(ages);

// Find the average age(all items divided by number of items)

/*

https://www.codingem.com/javascript-calculate-average/

 */

const average = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(average);

// Find the range of the ages(max minus min)

/*
https://www.geeksforgeeks.org/how-to-find-min-max-values-without-math-functions-in-javascript/

*/

let max = ages[0], min = ages[0];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > max) { max = ages[i]; }
    if (ages[i] < min) { min = ages[i]; }

}

console.log(max);
console.log(min);

// Compare the value of (min - average) and (max - average), use abs() method 
function minDifference(a, b) {
    return Math.abs(a - b);
}
console.log(minDifference(Math.min(...ages), average));

function maxDifference(a, b) {
    return Math.abs(a - b);
}
console.log(maxDifference(Math.max(...ages), average));
