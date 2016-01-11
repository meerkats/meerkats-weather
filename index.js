'use strict';
const katifyWeather = require('./lib/KatifyWeather');
const openWeather = require('./lib/OpenWeatherMap');
/**
 * Returns a bunch of weather info and some kat language.
 * @return {Object} JSON response with weather details
 */
module.exports = (katify) => {
  if (katify) {
    return openWeather.getWeather()
      .then(katifyWeather);
  }
  return openWeather.getWeather();
};
