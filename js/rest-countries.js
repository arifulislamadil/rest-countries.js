const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all
    `
    fetch(url)
        .then(res => res.json())
        .then(data => displayCuntries(data))
}

const displayCuntries = (countries) => {
    const container = document.getElementById("countries");
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ')
}

const getCountryHTML = country => {
    return `
    <div class = "country">
  <h3>${country.name.common}</h3>
        <h5>capital: ${country.capital}</h5>
        <img src = "${country.flags.png}"/>
        
    </div>
    `
}
loadCountries();