'use strict';

const openWeatherMap = require('./lib/OpenWeatherMap');
/**
 * Returns a bunch of weather info and some kat language.
 * @return {Object} JSON response with weather details
 */
module.exports = () => {
  return openWeatherMap.getWeather();
};
