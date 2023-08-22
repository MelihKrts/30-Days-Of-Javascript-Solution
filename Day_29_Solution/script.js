const colorCodesRange900 = ["#b71c1c", "#880e4f", "#4a148c", "#311b92", "#1a237e", "#0d47a1", "#01579b", "#006064", "#004d40", "#1b5e20", "#33691e", "#827717", "#f57f17", "#ff6f00", "#e65100", "#bf360c", "#3e2723", "#212121", "#263238"];

const colorCodesRange300 = ["#e57373", "#f06292", "#ba68c8", "#9575cd", "#7986cb", "#64b5f6", "#4fc3f7", "#4dd0e1", "#4db6ac", "#81c784", "#aed581", "#dce775", "#fff176", "#ffd54f", "#ffb74d", "#ff8a65", "#a1887f", "#e0e0e0", "#90a4ae"];

function randomColor(colorCodes) {
    const colorLength = colorCodes.length;
    return colorCodes[Math.floor(Math.random() * colorLength)];
}

function randomWeight() {
    const fWeight = [100, 200, 300, 400, 900],
    fWeightLength = fWeight.length;
    return fWeight[Math.floor(Math.random() * fWeightLength)];
}

setInterval(() => {
    const element = document.querySelector("div");
    element.innerHTML = "";

    const headingElement = document.createElement("h1");
    const text = "30 Days of JavaScript Challenge 2023 By Asabeneh Yetayeh".split('');

    text.forEach(character => {
        const span = document.createElement("span");
        span.style.color = randomColor(colorCodesRange300);
        span.textContent = character;
        span.style.letterSpacing="5px";
        headingElement.appendChild(span);
    })

    headingElement.style.fontWeight = randomWeight();

    element.style.backgroundColor = randomColor(colorCodesRange900)

    element.append(headingElement);

}, 2000)

