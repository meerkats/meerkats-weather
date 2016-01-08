'use strict';
const findLastKey = require('lodash.findlastkey');
const weatherConfig = require('../WeatherConfig');

const helpers = {
  getTemperatureText(temperature) {
    const keyText = findLastKey(weatherConfig.temperature, function (keyTemperature) {
      let normalizedTemp = Math.max(weatherConfig.temperatureMin, temperature);
      normalizedTemp = Math.min(weatherConfig.temperatureMax, normalizedTemp);
      return normalizedTemp >= keyTemperature;
    });
    return Array.isArray(keyText) ? keyText[keyText.length - 1] : keyText;
  },
  getHumidityText(humidity) {
    const keyText = findLastKey(weatherConfig.humidity, function (keyHumidity) {
      let normalizedHumidity = Math.max(weatherConfig.humidityMin, humidity);
      normalizedHumidity = Math.min(weatherConfig.humidityMax, normalizedHumidity);
      return normalizedHumidity >= keyHumidity;
    });
    return Array.isArray(keyText) ? keyText[keyText.length - 1] : keyText;
  },
  createWeatherMatrix(weatherData) {
    return [helpers.getTemperatureText(weatherData.main.temp),
      helpers.getHumidityText(weatherData.main.humidity),
      weatherData.weather[0].id];
  },
  katifyWeather(weatherData) {
    return new Promise((resolve) => {
      return resolve(helpers.createWeatherMatrix(weatherData));
    });
  }
};

module.exports = helpers.katifyWeather;
