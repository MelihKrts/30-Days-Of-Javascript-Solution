// Day 21 Exercise Solution

// Day 21 Exercise Level 2 Solution

// Exercise 3.1


const wrapper = document.querySelectorAll(".wrapper");
wrapper.forEach(element => {
    element.style.display = "flex";
    element.style.flexDirection = "column";
    element.style.justifyContent = "center";
    element.style.alignItems = "center";
    element.style.fontFamily = "REM";
})

const miniBigTtile = document.querySelector("h2");
miniBigTtile.style.textDecoration = "underline";

const listed = document.querySelectorAll("li");
listed.forEach((element, index) => {
    element.style.listStyleType = "none";
    element.style.margin = "20px 10px";
    element.style.padding = "15px 10px";
    element.setAttribute("id", "listed-style-" + (index + 1));
    element.style.backgroundColor = "#EB695B";
})

const selectStyle = document.getElementById("listed-style-1");
selectStyle.style.backgroundColor = "#5BBC7A";

const selectStyle2 = document.getElementById("listed-style-2");
selectStyle2.style.backgroundColor = "#F7DC5C";

const selectSpan = document.getElementById("year");
const elements = document.getElementById("timer");

const timer = document.getElementById("timer");
timer.style.padding = "15px 10px";
timer.style.color = "#fff";

function showingTime() {
    const time = new Date();
    let month = time.toLocaleDateString('en', { month: "long" });
    let day = String(time.getDate()).padStart(2, "0");
    let year = time.getFullYear();
    let h = String(time.getHours()).padStart(2, "0");
    let m = String(time.getMinutes()).padStart(2, "0");
    let s = String(time.getSeconds()).padStart(2, "0");
    const result = `${month} ${day} ${year} ${h}:${m}:${s}`;


    document.getElementById("timer").innerHTML = result;
    setTimeout(showingTime, 1000);
}

function randomColor() {
    var letter = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    selectSpan.style.color = randomColor();
    elements.style.backgroundColor = randomColor();
}

setInterval(changeColor, 1000);