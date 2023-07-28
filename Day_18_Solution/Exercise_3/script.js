// Day 18 Exercise Solution

// Day 18 Exercise Level 3 Solution

// Exercise 3.1

const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const weights = data.map(cat => parseFloat(cat.weight.metric.split(' ')[0]));
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        const averageWeight = totalWeight / weights.length;
        console.log('Average Weight of Cats (in metric unit):', averageWeight.toFixed(2), 'grams');
    })
    .catch(error => console.error('Error fetching data:', error));

// Exercise 3.2

const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const sortedCountries = data.sort((a, b) => b.area - a.area);
        const largestCountries = sortedCountries.slice(0,10);
        console.log("Largest 10 Countries");
        largestCountries.forEach((country, index) => {
            console.log(`${index}, ${country.name} - Area:${country.area}`);
        })
    })
    .catch(error => console.log("Error", error));


// Exercise 3.3

fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const officialLanguages = new Set();

        data.forEach(country => {
            if (country.languages && country.languages.length > 0);
            country.languages.forEach(languages => officialLanguages.add(languages.name));
        })

        const totalLangugaes = officialLanguages.size;

        console.log('Total number of languages used as official languages in the world:', totalLangugaes);

    })
    .catch(error => console.error("Error", error));




