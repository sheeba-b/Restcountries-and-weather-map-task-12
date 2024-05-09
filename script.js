// Function to fetch country data
function fetchCountryData() {
  fetch('https://restcountries.com/v3.1/all') // Fetch all countries data
    .then(response => response.json())
    .then(data => {
      // Iterate over each country
      data.forEach(country => {
        // Get country code and flag URL
        const countryCode = country.cca2;
        const flagUrl = https://www.countryflags.io/${countryCode}/flat/64.png;

        // Create img element for flag
        const flagImg = document.createElement('img');
        flagImg.src = flagUrl;
        flagImg.alt = country.name.common;
        flagImg.classList.add('flag');

        // Append flag to flags-container
        document.getElementById('flags-container').appendChild(flagImg);
      });
    })
    .catch(error => console.error('Error fetching country data:', error));
}

// Call fetchCountryData function when the page loads
window.onload = function() {
  fetchCountryData();
};