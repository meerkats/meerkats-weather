const argv = require('minimist')(process.argv.slice(2));
const weather = require('./index');

weather(argv.appId || null, argv.cityId || null, argv.katify)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
