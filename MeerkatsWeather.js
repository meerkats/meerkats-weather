const katifyWeather = require('./lib/KatifyWeather');
const weather = require('./index');

module.exports = (appId, cityId) => {
  return weather(appId || null, cityId || null)
    .then(katifyWeather)
    .catch((err) => {
      console.error(err);
    });
};
