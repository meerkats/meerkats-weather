'use strict';

const WeatherMatrix = require('../model/WeatherMatrix');
const helpers = {
  /**
  * Turns weather into a katification matrix
  * @returns {Object} A katification matrix
  */
  katifyWeather(weatherData) {
    return new Promise((resolve) => {
      return resolve(new WeatherMatrix(weatherData));
    });
  }
};

module.exports = helpers.katifyWeather;
