// Day 21 Exercise Solution

// Day 21 Exercise Level 1 Solution

// Exercise 1.1

const paragraph = document.querySelector('p');
console.log(paragraph);

// Exercise 1.2

const paragraph1 = document.querySelector("#paragraph-1");
const paragraph2 = document.querySelector("#paragraph-2");
const paragraph3 = document.querySelector("#paragraph-3");
const paragraph4 = document.querySelector("#paragraph-4");

console.log(paragraph1.innerText);
console.log(paragraph2.innerText);
console.log(paragraph3.innerText);
console.log(paragraph4.innerText);

// Exercise 1.3

const text = document.querySelectorAll("p");
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

// Exercise 1.4

const list = document.querySelectorAll("p");
for (let i = 0; i < list.length; i++) {
    const paragraph = list[i].textContent;
    console.log(paragraph);
}

// Exercise 1.5

const paragraphs = document.querySelectorAll('p');
paragraphs[3].textContent = "Fourty Paragraph";

// Exercise 1.6

const element = document.querySelectorAll("p");
element.forEach((paragraph, index) => {
    paragraph.setAttribute("id", "paragraph-" + (index + 1));
    paragraph.setAttribute("class", "custom-paragraph" + (index + 1));
})
console.log(element);