const weather = require('./index');

module.exports = () => {
  return weather()
    .then((weatherData) => {
      return weatherData;
    });
};
