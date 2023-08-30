const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const countryList = document.getElementById('country-list')

function searchCountries(query) {
    fetch(`https://restcountries.com/v3.1/name/${query}`)
    .then(res => res.json())
    .then(data =>{
        countryList.innerHTML = ''
        if(data.status == '404'){
            countryList.innerHTML = `<p>Country not found</p>`
        }else{
            data.forEach(country => {
                const countryCard = document.createElement('div')
                countryCard.classList.add('country-card')
                countryCard.innerHTML = `
                    <h2>${country.name.common}</h2>
                    <h3>${country.name.official}</h3>
                    <p>Capital: ${country.capital.toString()}</p>
                    <p>Region: ${country.region} </p>
                    <p>Population: ${country.population} </p>
                    <img src='${country.flags.png}' height= 130px width= 160px/>
                `
                countryList.appendChild(countryCard)
            });
        }

    })
}

searchButton.addEventListener('click',function(){
    const countryText = searchInput.value.trim()

    if(countryText.length > 2){
        searchCountries(countryText)
    }else{
        countryList.innerHTML = `<p>Enter at least 3 characters to search </p>`
    }
})