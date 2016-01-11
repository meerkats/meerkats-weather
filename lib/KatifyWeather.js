'use strict';

const findLastKey = require('lodash.findlastkey');
const weatherConfig = require('../WeatherConfig');

const helpers = {
  /**
  * Returns a string which represents the current temperature
  * @return {String} Text ready for the katification matrix
  */
  getTemperatureText(temperature) {
    const keyText = findLastKey(weatherConfig.temperature, function (keyTemperature) {
      let normalizedTemp = Math.max(weatherConfig.temperatureMin, temperature);
      normalizedTemp = Math.min(weatherConfig.temperatureMax, normalizedTemp);
      return normalizedTemp >= keyTemperature;
    });
    return Array.isArray(keyText) ? keyText[keyText.length - 1] : keyText;
  },
  /**
  * Returns a string which represents the current humidity
  * @return {String} Text ready for the katification matrix
  */
  getHumidityText(humidity) {
    const keyText = findLastKey(weatherConfig.humidity, function (keyHumidity) {
      let normalizedHumidity = Math.max(weatherConfig.humidityMin, humidity);
      normalizedHumidity = Math.min(weatherConfig.humidityMax, normalizedHumidity);
      return normalizedHumidity >= keyHumidity;
    });
    return Array.isArray(keyText) ? keyText[keyText.length - 1] : keyText;
  },
  /**
  * Returns an array of strings known as the katification matrix
  * @return {Array} The katification matrix
  */
  createWeatherMatrix(weatherData) {
    return [helpers.getTemperatureText(weatherData.main.temp),
      helpers.getHumidityText(weatherData.main.humidity),
      weatherData.weather[0].id];
  },
  /**
  * Turns weather into a katification matrix
  * @returns {Array} A katification matrix
  */
  katifyWeather(weatherData) {
    return new Promise((resolve) => {
      return resolve(helpers.createWeatherMatrix(weatherData));
    });
  }
};

module.exports = helpers.katifyWeather;
