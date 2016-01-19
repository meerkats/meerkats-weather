const argv = require('minimist')(process.argv.slice(2));
const weather = require('./Weather');
const katifyWeather = require('./MeerkatsWeather');

const weatherFunc = argv.katify ? katifyWeather : weather;

weatherFunc(argv.appId, argv.cityId, argv.katify)
  .then((data) => {
    if (data) {
      console.log(data);
    }
  });
