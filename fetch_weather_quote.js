const axios = require('axios');
const fs = require('fs');

// 获取 API 密钥和城市
const apiKey = process.env.WEATHER_API_KEY;
const city = process.env.CITY;

async function fetchWeatherAndQuote() {
    try {
        // 调用天气API
        const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const weather = weatherResponse.data;

        // 调用每日一句API
        const quoteResponse = await axios.get('https://api.quotable.io/random');
        const quote = quoteResponse.data.content;

        // 将天气和每日一句写入文件
        fs.writeFileSync('weather_and_quote.json', JSON.stringify({ weather, quote }, null, 2));
        console.log('Weather and quote data fetched successfully.');
    } catch (error) {
        console.error('Error fetching weather or quote:', error);
    }
}

fetchWeatherAndQuote();
