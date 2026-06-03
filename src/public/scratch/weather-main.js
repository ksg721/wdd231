import { getWeatherData } from "./weather-api.js";
import { renderWeatherCard } from "./weather-render.js";

function doWeather() {
  const data = getWeatherData();
  renderWeatherCard(data);
}

doWeather();
