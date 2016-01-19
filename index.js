'use strict';

const katifyWeather = require('./lib/KatifyWeather');
const openWeather = require('./lib/OpenWeatherMap');
const weatherDefaults = require('./OpenWeatherAPIConfig');
/**
 * Returns a bunch of weather info and some kat language.
 * param {string} OpenWeatherMaps App Key
 * params {string} Id of the city to query
 * @return {Object} JSON response with weather details
 */
module.exports = (appId, cityId, katify) => {
  if (katify) {
    return openWeather.getWeather(appId || weatherDefaults.appId,
                                  cityId || weatherDefaults.cityId)
      .then(katifyWeather);
  }
  return openWeather.getWeather(appId || weatherDefaults.appId,
                                cityId || weatherDefaults.cityId);
};
