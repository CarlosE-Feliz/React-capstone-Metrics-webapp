/* eslint-disable no-console */
const axios = require('axios');

function getCoins() {
  axios.get('https://api.coincap.io/v2/assets?limit=1')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}

getCoins();

module.exports = { getCoins };
