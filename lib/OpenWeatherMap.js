const axios = require('axios');

const helpers = {
  getWeather(appId, cityId) {
    if (!appId || !cityId) {
      return new Promise(function (resolve, reject) {
        reject('Required an appId and a cityId to query the weather.');
      });
    }
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${appId}&units=metric`)
      .then((returnedWeather) => {
        return {
          main: returnedWeather.data.main,
          weather: returnedWeather.data.weather,
          wind: returnedWeather.data.wind
        };
      });
  }
};

module.exports = helpers;
