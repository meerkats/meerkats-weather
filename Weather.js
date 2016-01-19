const weather = require('./index');

module.exports = (appId, cityId) => {
  return weather(appId, cityId)
    .catch((err) => {
      console.error(err);
    });
};
