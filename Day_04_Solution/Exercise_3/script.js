// Day 4 Exercise Solution 

// Exercise Level 3

// Exercise 3.1

function monthNameToMonth(monthName) {
  const months = { january: 1, february: 2, march: 3, april: 4, may: 5, june: 6, july: 7, august: 8, september: 9, october: 10, november: 11, december: 12 };
  return months[monthName.toLowerCase()]
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();  
}

function formatDaysInMonth(year, monthName) {
  let month = monthNameToMonth(monthName);
  let days = getDaysInMonth(year, month);
  monthName = monthName.toUpperCase().slice(0,1) + monthName.toLowerCase().slice(1);
  return `${monthName} ${year} has ${days} days`;
}

let monthName = prompt('Enter the month name:');
let year = prompt('Enter the year:');
alert(formatDaysInMonth(year, monthName))





/* 
    Exercise 3.1

     https://stackoverflow.com/questions/72743828/write-a-program-which-tells-the-number-of-days-in-a-month-consider-leap-year

*/



// Exercise 3.2

const years = prompt('Enter a year:');

function checkLeapYear(year) {


    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert(year + ' is a leap year');
    } else {
       alert(year + ' is not a leap year');
    }
}

checkLeapYear(years);

/* 

    Example 3.2 

    https://www.programiz.com/javascript/examples/check-leap-year

*/