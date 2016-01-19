const weather = require('./index');

module.exports = (appId, cityId) => {
  return weather(appId, cityId, true)
    .catch((err) => {
      console.error(err);
    });
};
