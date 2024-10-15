const fs = require('fs');
const md = require('markdown-it')();

const markdown = fs.readFileSync('todo.md', 'utf-8');
const { weather, quote } = JSON.parse(fs.readFileSync('weather_and_quote.json', 'utf-8'));

const htmlContent = `
  <html>
  <body>
    <h1>Daily TODOs</h1>
    <div>${md.render(markdown)}</div>
    <h2>Weather</h2>
    <p>${weather.current.condition.text}, ${weather.current.temp_c}°C</p>
    <h2>Daily Quote</h2>
    <p>${quote}</p>
    <h2>Reminders</h2>
    <p style="color: red; font-weight: bold;">Remember: Sleep early, wake up early!</p>
  </body>
  </html>
`;

fs.writeFileSync('daily_email.html', htmlContent);
