
const input = document.getElementById("number");
const btn = document.getElementById("btn")
const resultSpan = document.getElementById("result");
const select = document.getElementById("select");
const planetName = document.getElementById("planet-name");

const img = document.getElementById("img");

btn.addEventListener("click", click);

function click() {
    const objectWeightValue = input.value.trim();

    if (objectWeightValue === "" || isNaN(objectWeightValue)) {
        resultSpan.textContent = "Please enter a valid object weight.";
        return;
    }

    const objectWeight = parseFloat(objectWeightValue);
    const selected = select.value;
    const gravity = getGravity(selected);
    const weight = calculateWeight(objectWeight, gravity);

    resultSpan.innerHTML = `<span>${weight.toFixed(2)} N</span>`;
    planetName.innerHTML = `<span>${selected}</span>`;
    img.src = `img/${selected}.png`;

    function getGravity(selected) {
        const gravityMap = {
            mercury: 3.7,
            venus: 8.87,
            earth: 9.81,
            mars: 3.71,
            jupiter: 24.79,
            saturn: 10.44,
            uranus: 8.69,
            neptune: 11.15,
            moon: 1.62,
            pluto: 0.62
        };
    
        return gravityMap[selected]; 
    }
    
    function calculateWeight(objectWeight, gravity) {
        return objectWeight * gravity;
    }
    
}


