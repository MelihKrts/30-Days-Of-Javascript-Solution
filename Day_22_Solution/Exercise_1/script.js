
const evenColor = '#21BF73',
    oddColor = '#FDDB3A',
    primeColor = '#FD5E53';

const wrapperDiv = document.querySelector('#wrapper');
wrapperDiv.style.display = "flex";
wrapperDiv.style.justifyContent = "center";
wrapperDiv.style.alignItems = "center";
wrapperDiv.style.margin = "auto";
wrapperDiv.style.flexWrap = "wrap";

let totalCount = 101

for (let i = 0; i <= totalCount; i++) {
    const divElement = document.createElement('div')

    if (i % 2 === 0) divElement.style.background = evenColor;

    if (i % 2 !== 0) divElement.style.background = oddColor;

    divElement.style.width = "200px";
    divElement.style.height = "110px";
    divElement.style.textAlign = "center";
    divElement.style.color = "white";
    divElement.style.lineHeight = "110px";
    divElement.style.margin = "10px";
    divElement.style.fontWeight = "bold";
    divElement.style.fontFamily = "REM";

    divElement.textContent = i;
    wrapperDiv.appendChild(divElement);
}


function generatePrimes(count) {
    const primes = [];
    for (let i = 2; i <= count; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

const generatedPrimeNumbers = generatePrimes(totalCount)

generatedPrimeNumbers.forEach(prime => {
    wrapperDiv.children[prime].style.background = primeColor
})
