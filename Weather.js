const weather = require('./index');

module.exports = (appId, cityId) => {
  return weather(appId || null, cityId || null)
    .then((weatherData) => {
      return weatherData;
    })
    .catch((err) => {
      console.error(err);
    });
};
