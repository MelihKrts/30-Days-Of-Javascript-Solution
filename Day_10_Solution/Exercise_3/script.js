// Day 10 Exercise Solution

// Day 10 Exercise Level 3 Solution

const countries = require('../countries_data.js');

// Exercise 3.1

function countUniqueLanguages(countriesObject) {
    const allLanguages = new Set();

    for (const country in countriesObject) {
        const languages = countriesObject[country].languages;
        languages.forEach((language) => allLanguages.add(language));
    }

    return allLanguages.size;
}

const numberOfLanguages = countUniqueLanguages(countries, 10);
console.log("Number of unique languages:", numberOfLanguages);


// Exercise 3.2

function findTop10SpokenLanguages(countries) {
    const languageTotals = {};
  
    for (const country in countries) {
      const languages = countries[country].languages;
      languages.forEach((languages) => {
        if (languageTotals[languages.name]) {
          languageTotals[languages.name] += languages.population;
        } else {
          languageTotals[languages.name] = languages.population;
        }
      });
    }
  
    const languageArray = Object.entries(languageTotals).map(([name, speakers]) => ({
      name,
      speakers,
    }));
  
    languageArray.sort((a, b) => b.speakers - a.speakers);
  
    const top10Languages = languageArray.slice(0, 10);
  
    return top10Languages;
  }
  
  const top10Languages = findTop10SpokenLanguages(countries);
  console.log("Top 10 Spoken Languages:", top10Languages);

function mostSpokenLanguages(countries, count) {
    const languageCount = {};

    for (const country of countries) {
        const countryLanguages = country.languages;
        for (const language of countryLanguages) {
        if (languageCount[language]) {
            languageCount[language]++;
        } else {
            languageCount[language] = 1;
        }
        }
    }

    const sortedLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]);
    const mostSpoken = sortedLanguages.slice(0, count);

    const result = mostSpoken.map(([language, count]) => ({ [language]: count }));

    return result;
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));

