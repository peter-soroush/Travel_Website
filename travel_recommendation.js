const searchBtn = document.getElementById('btnSearch');
const clearBtn = document.getElementById('btnClear');
const resultDiv = document.getElementById('resultContainer');

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    resultDiv.innerHTML = '';
    
    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (input.includes('beach')) {
            displayResults(data.beaches);
        } else if (input.includes('temple')) {
            displayResults(data.temples);
        } else if (input.includes('country') || input.includes('countries')) {
            data.countries.forEach(country => {
                displayResults(country.cities, country.name);
            });
        } else {
            const countryMatch = data.countries.find(c => c.name.toLowerCase() === input);
            if (countryMatch) {
                displayResults(countryMatch.cities, countryMatch.name);
            } else {
                resultDiv.innerHTML = '<p style="color: white; font-size: 1.2rem;">Sorry, destination not found.</p>';
            }
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

function displayResults(results, countryName = '') {
    results.forEach(place => {
        const div = document.createElement('div');
        div.classList.add('recommendation-card');

        // Optional time logic
        let timeDisplay = '';
        if (countryName) {
            const timeZone = getTimeZone(countryName);
            const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: timeZone, hour12: true, hour: 'numeric', minute: 'numeric' });
            timeDisplay = `<p style="font-size:0.9rem; color:gray;">Current Time: ${currentTime}</p>`;
        }

        div.innerHTML = `
            <img src="${place.imageUrl}" alt="${place.name}">
            <div class="card-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                ${timeDisplay}
                <button>Visit Now</button>
            </div>
        `;
        resultDiv.appendChild(div);
    });
}

function getTimeZone(country) {
    if (country.includes('Australia')) return 'Australia/Sydney';
    if (country.includes('Japan')) return 'Asia/Tokyo';
    if (country.includes('Iran')) return 'Asia/Tehran';
    if (country.includes('Brazil')) return 'America/Sao_Paulo';
    if (country.includes('United States')) return 'America/New_York';
    return 'UTC';
}

function clearResults() {
    document.getElementById('searchInput').value = '';
    resultDiv.innerHTML = '';
}

// ---------------------------------------
// EXTRA FEATURE: Show items on page load
// ---------------------------------------
window.onload = function() {
    // This fetches data immediately so the page isn't empty
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        // Let's show the first beach and the first temple as a "Daily Feature"
        // You can change this to show whatever you want
        const featured = [data.beaches[0], data.temples[0]]; 
        displayResults(featured);
    });
};

searchBtn.addEventListener('click', search);
clearBtn.addEventListener('click', clearResults);