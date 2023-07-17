// Day 3 Exercise Solution

// Exercise Level 1

// Exercise 1.1
var firstName = "Melih";
var lastName = "Karataş";
var country = "Turkey(Türkiye)";
var city = "Manisa";
var age = 22;
var isMarried = false;
var time = new Date();
var year = time.getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Exercise 1.2
var stringNumber = "10";
var number = 10;
console.log(stringNumber === number);

// Exercise 1.3
const floatNumber = 9.8;
var number = 10;
console.log(floatNumber === number);

// Exercise 1.4
const isTrue = true;
const isHungry = true;
const isYoung = true;

const isLightOff = false;
const isSleep = false;
var isMarried = false;

// Exercise 1.5 --> EN(First try to guess for yourself) --> TR(Önce kendiniz tahmin etmeye çalışın)
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

const python = "python";
const jargon = "jargon";
console.log(python.length != jargon.length);

// Exercise 1.6 --> EN(First try to guess for yourself) --> TR(Önce kendiniz tahmin etmeye çalışın)
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

const dragon = "dragon";
console.log("dragon".includes("on") == python.includes("on"));

// Exercise 1.7
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var today = time.getDate();
var numberDay = time.getDay();
var nowTime = time.getHours();
var nowMinute = time.getMinutes();
var allSecond = time.getTime();

console.log(year);
console.log(month);
console.log(time);
console.log(today);
console.log(nowTime);
console.log(nowMinute);
console.log(time);