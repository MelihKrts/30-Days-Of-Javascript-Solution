// Exercise 

// Exercise Level 1 

// --------------------------------------------------------------------

// Exercise 1.1

// const paragraph = document.querySelector('p');
// console.log(paragraph);

// Exercise 1.2

// const paragraph = document.getElementById('first-paragraph');
// console.log(paragraph);

// Exercise 1.3

// const paragraph = document.querySelectorAll('p')
// for (let i = 0; i < paragraph.length; i++) {
//     console.log(paragraph);
// }

// Exercise 1.4 (??)

// const paragraph = document.querySelectorAll('p')
// // console.log(paragraph[0]);
// // console.log(paragraph[1]);
// // console.log(paragraph[2]);
// console.log(paragraph[3]);

// Exercise 1.5 

// const paragraph = document.querySelectorAll('P')
// const changes = paragraph[3].textContent='Fourth Paragraph';
// console.log(changes);

// Exercise 1.6

// const paragraph = document.querySelectorAll('p')

// paragraph.forEach(paragraph => {
//     paragraph.setAttribute("class", "classes");
//     paragraph.setAttribute("id", "identity");
// })



// Exercise Level 1 ended

// -----------------------------------------------------------------------------


// Exercise Level 2


// Exercise 2.1

// const paragraph = document.querySelectorAll('p')

// paragraph.forEach((paragraph) => {
//     paragraph.style.fontWeight = "400";
//     paragraph.style.fontFamily = "Open Sans, sans-serif";
// })


// Exercise 2.2

// const paragraph = document.querySelectorAll('p');
// paragraph.forEach((paragraph, i) => {

//     if (i % 2 == 0) {
//         paragraph.style.color = "red";
//     }
//     else{
//         paragraph.style.color="green";
//     }
// })

// Exercise 2.3

// const paragraph = document.querySelectorAll('p');
// paragraph.forEach((paragraph)=>{
//     paragraph.setAttribute("class","classes");
//     paragraph.setAttribute("id","identity");
//     paragraph.textContent="lorem.1";
// })

// Exercise 2 ended

// --------------------------------------------------------------

// Exercise 3

// Exercise 3.1
// Exercise 3.2
// Exercise 3.3

const span = document.querySelector("span")
const element = document.getElementById("timer");

function showTime() {
    const date = new Date();
    let month = date.toLocaleString('en', { month: "long" });
    let day = date.getDate();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    const total = `${month} ${day} ${h}:${m}:${s}`

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('timer').innerHTML = total;
    setTimeout(showTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function RandomColor() {
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color

}

function changeColor() {
    span.style.color = RandomColor()
    element.style.backgroundColor = RandomColor()
}

setInterval(changeColor, 1000);



// Custom style 
element.style.padding = "15px"
element.style.width = "250px";
element.style.textAlign = "center";

const list = document.querySelectorAll("li")
list.forEach((list) => {
    list.style.backgroundColor = "#EB695B";
    list.style.padding="20px";
})
list[0].style.backgroundColor="#5BBC7A";
list[1].style.backgroundColor="#F7DC5C";
