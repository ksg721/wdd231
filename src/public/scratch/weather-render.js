export function renderWeatherCard(data) {
  // render.js
  const weatherObj = document.getElementById("weather");
  weatherObj.innerHTML = `
        <h2>${data.location} ${data.icon}</h2>
        <h3>${data.condition}</h3>
        <h3>Temperature: ${data.temp}</h3>
        <h3>Windspeed: ${data.windspeed}</h3>
        `;
}
