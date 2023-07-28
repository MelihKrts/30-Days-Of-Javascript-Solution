// Day 18 Exercise Solution

// Day 18 Exercise Level 2 Solution

// Exercise 2.1

const catsAPI = 'https://api.thecatapi.com/v1/breeds';
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const catsName = data.map(cat => cat.name);
        console.log(catsName);
    })
    .catch(error => console.error("Error", error));