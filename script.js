document.addEventListener('DOMContentLoaded', function() {
    getAllCountries();
  
})

//DOM render functions

function renderOneCountry(country) {
    //Build a single country
    let card = document.createElement('div');
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
   //Using fetch to load the countries database 
}
function getAllCountries(country){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(countryData => countryData.forEach(country => renderOneCountry(country)));
}
//Creating the search functionalities
let searchBtn = document.querySelector('#search');
let countryInput = document.getElementById('country-input');
searchBtn.addEventListener("click", () => {
    
    let countryName = countryInput.value;
    let countryURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(countryURL)
        .then((response) => response.json())
        .then((data) => showModal(data));
});

function showModal(data) {
    var modal = document.getElementById("myModal");
        //Next, we get the span element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    modalData = document.createElement('div');
    modalData.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
                </div>
            </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
                </div>
            </div>
             <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${
                      data[0].currencies[Object.keys(data[0].currencies)].name
                    } - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>
             <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Main Languages:</h4>
                    <span>${Object.values(data[0].languages)
                      .toString()
                      .split(",")
                      .join(", ")}</span>
                </div>
            </div>
            `;
        document.querySelector('#modal-body').appendChild(modalData)
        //The line below will load the modal on click (its the main function of this whole section)
        modal.style.display = "block";
        //Setting up the comment event listener
        const reviews = document.getElementById("review-list");
        const reviewsForm = document.getElementById("review-form");
        //event listener to handle comment input
        reviewsForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let reviewUpdate = document.getElementById('review');
            let text = reviewUpdate.value;
            let li = document.createElement('li');
            li.innerHTML = text;
            reviews.appendChild(li);
         })
         
        span.onclick = function() {
            modal.style.display = "none";
          }
          // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
     }}
    
        
    

