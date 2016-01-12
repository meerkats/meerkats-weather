const getValues = require('lodash.values');

const temperature = {
  freezing: 10,
  cold: 15,
  perfect: 20,
  hot: 30,
  melting: 40,
  dying: 50
};
const humidity = {
  dry: 30,
  perfect: 40,
  moist: 70,
  swimming: 90
};
const weather = {
  thunderstorm: 2,
  drizzle: 3,
  rain: 5,
  clear: 800,
  clouds: 8,
  hail: 906
};
const componentOrder = ['temperature', 'weather', 'humidity'];
const humidityValues = getValues(humidity);
const temperatureValues = getValues(temperature);
const humidityMin = Math.min.apply(null, humidityValues);
const humidityMax = Math.max.apply(null, humidityValues);
const temperatureMin = Math.min.apply(null, temperatureValues);
const temperatureMax = Math.max.apply(null, temperatureValues);

module.exports = {
  temperature,
  temperatureMin,
  temperatureMax,
  humidity,
  humidityMin,
  humidityMax,
  weatherCodes: weather,
  componentImportance
};
