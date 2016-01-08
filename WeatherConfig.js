const getValues = require('lodash.values');

const temperature = {
  freezing: 10,
  cold: 20,
  perfect: 25,
  hot: 30,
  tooHot: 35,
  melting: 40,
  dying: 50
};
const humidity = {
  dry: 30,
  perfect: 50,
  moist: 70,
  swimming: 90
};
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
  humidityMax
};
