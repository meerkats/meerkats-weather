'use strict';

const katifyWeather = require('./lib/KatifyWeather');
const openWeather = require('./lib/OpenWeatherMap');
/**
 * Returns a bunch of weather info and some kat language.
 * @param {string} OpenWeatherMaps App Key
 * @param {string} Id of the city to query
 * @param {bool} Should we Katify the weather?
 * @return {Object} JSON response with weather details
 */
module.exports = (appId, cityId, katify) => {
  if (katify) {
    return openWeather.getWeather(appId, cityId)
      .then(katifyWeather);
  }
  return openWeather.getWeather(appId, cityId);
};
