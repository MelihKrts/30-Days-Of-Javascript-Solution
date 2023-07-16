// Day 9 Exercise Solution

// Day 9 Exercise Level 3 Solution

// Exercise 3.1

const countries = require('../countries_data.js');

// const sortedCountriesByName = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
// const sortedCapital = countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));
// const sortedPopulation = countries.slice().sort((a, b) => a.population - b.population);

// console.log('Sorted by Name:');
// sortedCountriesByName.forEach(country => console.log(country.name));

// console.log('\nSorted by Capital:');
// sortedCapital.forEach(country => console.log(country.capital));

// console.log('\nSorted by Population:');
// sortedPopulation.forEach(country => console.log(country.population));


// Exercise 3.2

function mostSpokenLanguages(countries, count) {
    const languageCount = {};
    countries.forEach(function (country) {
        country.languages.forEach(function (language) {
            if (languageCount.hasOwnProperty(language)) {
                languageCount[language]++;
            } else {
                languageCount[language] = 1;
            }
        });
    });
    const sortedLanguages = Object.entries(languageCount).sort(function (a, b) {
        return b[1] - a[1];
    });
    return sortedLanguages.slice(0, count).map(function ([language, count]) {
        return { country: language, count };
    });
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));


// Exercise 3.3

function findTenMostPopulatedCountries(data) {
    // Sort the countries by population in descending order
    const sortedCountries = data.slice().sort((a, b) => b.population - a.population);
  
    // Get the top 10 most populated countries
    const top10Countries = sortedCountries.slice(0, 10);
  
    return top10Countries;
  }
  
  const top10MostPopulatedCountries = findTenMostPopulatedCountries(countries);
  

  console.log('Top 10 Most Populated Countries:');
  top10MostPopulatedCountries.forEach((country, index) => {
    console.log(`${index + 1}. ${country.name} - Population: ${country.population}`);
  });


//   Exercise 3.4

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
  count: function () {
    return ages.length;
  },

  sum: function () {
    return ages.reduce((acc, curr) => acc + curr, 0);
  },

  min: function () {
    return Math.min(...ages);
  },

  max: function () {
    return Math.max(...ages);
  },

  range: function () {
    return this.max() - this.min();
  },

  mean: function () {
    return this.sum() / this.count();
  },

  median: function () {
    const sortedAges = ages.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedAges.length / 2);

    if (sortedAges.length % 2 === 0) {
      return (sortedAges[middle - 1] + sortedAges[middle]) / 2;
    } else {
      return sortedAges[middle];
    }
  },

  mode: function () {
    const frequencyMap = new Map();
    ages.forEach(age => {
      frequencyMap.set(age, frequencyMap.get(age) + 1 || 1);
    });

    let mode = null;
    let maxFrequency = 0;

    frequencyMap.forEach((frequency, age) => {
      if (frequency > maxFrequency) {
        mode = age;
        maxFrequency = frequency;
      }
    });

    return { mode: mode, count: maxFrequency };
  },

  var: function () {
    const mean = this.mean();
    const squaredDifferences = ages.map(age => Math.pow(age - mean, 2));
    return this.sumArray(squaredDifferences) / this.count();
  },

  std: function () {
    return Math.sqrt(this.var());
  },

  sumArray: function (arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  },

  freqDist: function () {
    const frequencyMap = new Map();
    ages.forEach(age => {
      frequencyMap.set(age, frequencyMap.get(age) + 1 || 1);
    });

    const frequencyDistribution = [];
    frequencyMap.forEach((frequency, age) => {
      frequencyDistribution.push([frequency, age]);
    });

    return frequencyDistribution.sort((a, b) => b[0] - a[0]);
  },
};

console.log('Count:', statistics.count()); 
console.log('Sum: ', statistics.sum()); 
console.log('Min: ', statistics.min()); 
console.log('Max: ', statistics.max()); 
console.log('Range: ', statistics.range()); 
console.log('Mean: ', statistics.mean()); 
console.log('Median: ', statistics.median()); 
console.log('Mode: ', statistics.mode()); 
console.log('Variance: ', statistics.var()); 
console.log('Standard Deviation: ', statistics.std()); 
console.log('Frequency Distribution: ', statistics.freqDist());

