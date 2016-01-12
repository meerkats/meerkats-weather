'use strict';

const findLastKey = require('lodash.findlastkey');
const filter = require('lodash.filter');
const weatherKatisms = require('../WeatherKatisms');
const weatherConfig = require('../WeatherConfig');
const helpers = {
  /**
   * Tries to return a weather Katism that is as close to possible to the
   * given weather matric
   * @returns {String} A clever/witty katism about the weather
   */
  findKatism(weatherMatrix) {
    // Get the order of importance for weather components
    let reduceList = weatherKatisms.katisms;
    weatherConfig.componentOrder.forEach((component) => {
      reduceList = filter(reduceList, (katismObject) => {
        return katismObject[component] === weatherMatrix[component] || katismObject[component] === '*';
      });
    });
    return reduceList.length ? reduceList[0].katism : null;
  },
   /**
  * Returns a string which represents the atmospheric weather (rain/clouds/clear/thunderstorm etc)
  * if an exact match it found
  * @return {String} Text ready for the katification matrix
  */
  getExactWeatherMatch(weatherCode) {
    return findLastKey(weatherConfig.weatherCodes, (weatherCodeKeys) => {
      return weatherCode === weatherCodeKeys;
    });
  },
  /**
  * Returns a string which represents the atmospheric weather (rain/clouds/clear.thunderstorm etc)
  * if an general match is found.
  * @return {String} Text ready for the katification matrix
  */
  getWeatherText(weatherCode) {
    let weatherText = helpers.getExactWeatherMatch(weatherCode);
    if (!weatherText) {
      weatherText = findLastKey(weatherConfig.weatherCodes, (weatherCodeKeys) => {
        return weatherCode.toString()[0] === weatherCodeKeys.toString();
      });
    }
    return weatherText;
  },
  /**
  * Returns a string which represents the current temperature
  * @return {String} Text ready for the katification matrix
  */
  getTemperatureText(temperature) {
    const keyText = findLastKey(weatherConfig.temperature, (keyTemperature) => {
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
    const keyText = findLastKey(weatherConfig.humidity, (keyHumidity) => {
      let normalizedHumidity = Math.max(weatherConfig.humidityMin, humidity);
      normalizedHumidity = Math.min(weatherConfig.humidityMax, normalizedHumidity);
      return normalizedHumidity >= keyHumidity;
    });
    return Array.isArray(keyText) ? keyText[keyText.length - 1] : keyText;
  }
};

class WeatherMatrix {
  constructor(rawData) {
    this.temperature = helpers.getTemperatureText(rawData.main.temp);
    this.humidity = helpers.getHumidityText(rawData.main.humidity);
    this.weather = helpers.getWeatherText(rawData.weather[0].id);
    this.katism = helpers.findKatism(this);
    this.raw = rawData;
  }
}

module.exports = WeatherMatrix;
