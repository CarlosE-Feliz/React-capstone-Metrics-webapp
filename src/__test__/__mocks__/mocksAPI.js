const axios = require('axios');

const getCoins = () => {
  axios.get('https://api.coincap.io/v2/assets?limit=1')
    .then((response) => response.data)
    .catch((error) => error);
};

module.exports = { getCoins };
