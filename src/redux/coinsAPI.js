/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const GET_COINS = 'GET_COINS';
const coinAPI = 'https://api.coincap.io/v2/assets?limit=10';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return [...action.newData];

    default:
      return state;
  }
};

export const getCoin = () => (dispatch) => {
  axios.get(coinAPI)
    .then((res) => {
      const newData = [];
      const allCoins = res.data.data;
      console.log(allCoins);
      allCoins.forEach((item) => {
        const data = {
          name: item.name,
          symbol: item.symbol,
          supply: item.supply,
          maxSupply: item.maxSupply,
          price: item.priceUsd,
          id: item.rank,
        };
        newData.push(data);
      });
      console.log(newData);
      dispatch({
        type: GET_COINS,
        newData,
      });
    });
};

export default reducer;
