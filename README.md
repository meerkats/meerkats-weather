# Meerkats-Weather

A small module to query some basic data from the open weather maps API

## Requirements

- Node.js + npm

## Usage

## Command Line
  To output the result directly to the console
  ```
    node ConsoleWeather.js --appId={appId} --cityId={cityId} --katify
  ```
  or
  ```
    node ConsoleWeather.js --appId={appId} --cityId={cityId}
  ```
## Code
  ```
    const appId = 'xxxxxxxxxxxxxxx';
    const cityId = 'xxxxxxxxxx';

    // Get some katified weather
    const katifiedWeathe = require('meerkats-weather/MeerkatsWeather');
    katifiedWeather(appId, cityId)
      .then((output) => {
        console.log(output);
      })
    // Get some boring old weatherData
    const boringWeather = require('meerkats-weather/Weather');
    boringWeather(appId, cityId)
      .then((output) => {
        console.log(output);
      });
    // Your choice if you want to Katify or not
    const yourChoiceWeather = require('meerkats-weather');
    yourChoiceWeather(appId, cityId, {True or False})
      .then((output) => {
        console.log(output);
      });
  ```

# Author

This repo is created and maintained by MEERKATS in PERTH, WESTERN AUSTRALIA.
