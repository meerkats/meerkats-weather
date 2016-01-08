const meerkatsWeather = require('./index');

meerkatsWeather()
  .then((data) => {
    console.log(data);
  });
