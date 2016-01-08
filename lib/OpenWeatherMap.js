const axios = require('axios');
const weatherDefaults = require('../OpenWeatherAPIConfig');

const helpers = {
  getWeather() {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${weatherDefaults.cityId}&appid=${weatherDefaults.appId}&units=metric`)
      .then((returnedWeather) => {
        return {
          main: returnedWeather.data.main,
          weather: returnedWeather.data.weather,
          wind: returnedWeather.data.wind };
      });
  }
};

module.exports = helpers;
