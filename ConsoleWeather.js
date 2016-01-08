const argv = require('minimist')(process.argv.slice(2));
const weather = require('./index');

weather(argv.katify)
  .then((data) => {
    console.log(data);
  });

