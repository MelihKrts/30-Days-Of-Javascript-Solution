// const time = new Date();
// const year = time.getFullYear();
// const month = time.getMonth() + 1;
// const day = time.getDate();
// const hour = time.getHours();
// const minute = time.getMinutes();

// function format(a) {
//     if (a < 10) {
//         return (a = `0${a}`);
//     }
//     return a;
// }


let dateInfo = new Date();
let year = dateInfo.getFullYear();
let month = String(dateInfo.getMonth()).padStart(2,'0');
let date = dateInfo.getDate();
// let hours = dateInfo.getHours();
let hours = String(dateInfo.getHours()).padStart(2, '0');
let minutes = String(dateInfo.getMinutes()).padStart(2, '0');



console.log(`${year}-${month}-${date} ${hours}:${minutes}`);