const katifyWeather = require('./lib/KatifyWeather');
const weather = require('./index');

module.exports = () => {
  return weather()
    .then(katifyWeather);
};
