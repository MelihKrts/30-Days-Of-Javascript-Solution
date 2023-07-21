let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = String(dateInfo.getMonth()).padStart(2,'0');
let date = dateInfo.getDate();
// let hours = dateInfo.getHours();
let hours = String(dateInfo.getHours()).padStart(2, '0');
let minutes = String(dateInfo.getMinutes()).padStart(2, '0');

console.log(`${year}-${month}-${date} ${hours}:${minutes}`);