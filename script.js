document.addEventListener('DOMContentLoaded', function() {
    getAllCountries();
    
})
//DOM render functions
//const mainContainer = document.getElementById('main-container');
function renderOneCountry(country) {
    //Build a single country
    let card = document.createElement('div');
    let i = 0;
    card.className = 'child';
    card.innerHTML = `
    <img src="${country.flags.png}" class="flag-img">
    <h2>${country.name.common}</h2>
    <div class="wrapper">
        <div class="content-wrapper">
            <h4>Capital:</h4>
            <span>${country.capital}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="content-wrapper">
            <h4>Population:</h4>
            <span>${country.population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="content-wrapper">
            <h4>Region:</h4>
            <span>${country.region}</span>
        </div>
    </div>
    `
    //mainContainer.appendChild(card)
    //Add country card to DOM
    document.querySelector('#main-container').appendChild(card)
    i++;
}
function getAllCountries(country){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(countryData => countryData.forEach(country => renderOneCountry(country)));
}
/*

function showCountry(country){
    country.forEach(country => {
    const card = document.createElement('div');
    card.className = 'child';
    card.innerhtml = `
    <img src="${country.flags.svg}" class="flag-img">
    <h2>${country.name.common}</h2>
    <div class="wrapper">
        <div class="content-wrapper">
            <h4>Capital:</h4>
            <span>${country.capital}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="content-wrapper">
            <h4>Population:</h4>
            <span>${country.population}</span>
        </div>
    </div>
    <div class="wrapper">
        <div class="content-wrapper">
            <h4>Region:</h4>
            <span>${country.region}</span>
        </div>
    </div>
    `
    document.querySelector('main-container').appendChild(card)

    })
}

//Get data and then Render our countries to the DOM
function initialize() {
    getAllCountries()
}
initialize();
//country => renderOneCountry(country))
*/