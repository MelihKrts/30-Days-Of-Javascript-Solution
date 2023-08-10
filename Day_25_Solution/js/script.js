import countries_data from "./countries_data.js";
const length = document.getElementById("length");
const value = countries_data.length;


function findTenMostPopulatedCountries(){
    const tenMostPopulatedCountries = Object.keys(countries_data).map(key => {
      const country = countries_data[key]
    
      return {
        name: country.name,
        population: country.population,
      }
    }).sort((a, b)=> {
      if (a.population > b.population) return -1
      if (a.population < b.population) return 1
      return 0
    }).splice(0, 10)
  
    return tenMostPopulatedCountries
  }

  function findTenMostSpokenLanguages(){

    const filteringLanguages = new Set()
  
    Object.keys(countries_data).forEach(key => {
      countries_data[key].languages.forEach(lang => filteringLanguages.add(lang))
    })
  
    const languagesWithCount = Array.from(filteringLanguages).reduce((acc, cur) => {
      acc[cur] = {
        language: cur,
        count: 0
      }
      return acc
    }, {})
  
    Object.keys(countries_data).forEach(key => {
      countries_data[key].languages.forEach(lang => {
          if(languagesWithCount[lang].language === lang) languagesWithCount[lang].count++
      })
    })
  
    const tenMostSpokenLanguages = Object.keys(languagesWithCount).map(key => languagesWithCount[key]).sort((a, b)=> {
      if (a.count>b.count) return -1
      if (a.count<b.count) return 1
      return 0
    }).splice(0, 10)
  
    return tenMostSpokenLanguages
  }

  function updateDOM(optionToProceed){

    const wrapperElement = document.querySelector('.wrapper');
          wrapperElement.innerHTML = ''
  
    if (optionToProceed === 'languages') {
  
      const returnedObject = findTenMostSpokenLanguages();
  
      const maxValue = Object.keys(returnedObject).map(key => {
                           return returnedObject[key].count
                        })[0]
      
      Object.keys(returnedObject).forEach(key => {
        const componentElement = document.createElement('div')
            componentElement.classList.add('component')
        
        const language = returnedObject[key].language,
              spokenCountOfLanguage = returnedObject[key].count
  
        componentElement.innerHTML = `
        <p class="description">${language}</p>
        <progress min="0" max="${maxValue}" value="${spokenCountOfLanguage}"></progress>
        <p class="count">${spokenCountOfLanguage}</p>
        `
  
        wrapperElement.appendChild(componentElement)
        
      })
      return
    }
  
    const returnedObject = findTenMostPopulatedCountries();
  
    const maxValue = Object.keys(returnedObject).map(key => {
                         return returnedObject[key].population
                      })[0]
    
    Object.keys(returnedObject).forEach(key => {
      const componentElement = document.createElement('div')
            componentElement.classList.add('component')
      
      const country = returnedObject[key].name,
            populationOfCountry = returnedObject[key].population
  
      componentElement.innerHTML = `
      <p class="description">${country}</p>
      <progress min="0" max="${maxValue}" value="${populationOfCountry}"></progress>
      <p class="count">${populationOfCountry}</p>
      `
  
      wrapperElement.appendChild(componentElement)
    })
  }

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e)=>updateDOM(e.target.value))
  })

length.innerHTML = `<span>${value}</span>`;
