const argv = require('minimist')(process.argv.slice(2));
const weather = require('./index');

if (argv.katify && argv.katify === true) {
  weather(true)
    .then((data) => {
      console.log(data);
    });
}
else {
  weather(false)
    .then((data) => {
      console.log(data);
    });
}

