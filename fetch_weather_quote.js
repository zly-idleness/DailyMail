const axios = require('axios');
const fs = require('fs');

async function fetchWeatherAndQuote() {
    try {
        const weatherResponse = await axios.get('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=YOUR_CITY');
        const quoteResponse = await axios.get('https://api.quotable.io/random');

        const weather = weatherResponse.data;
        const quote = quoteResponse.data.content;

        fs.writeFileSync('weather_and_quote.json', JSON.stringify({ weather, quote }));
    } catch (error) {
        console.error('Error fetching weather or quote:', error);
    }
}

fetchWeatherAndQuote();
