/* eslint-disable no-console */
import axios from 'axios';

const GET_COINS = 'GET_COINS';
const GET_ONE_COIN = 'GET_ONE_COIN';
const coinAPI = 'https://api.coincap.io/v2/assets?limit=10';
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return [...action.newData];
    case GET_ONE_COIN:
      return action.newState;
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
          name: item.id,
          symbol: item.symbol,
          id: item.rank,
          clicked: false,
        };
        newData.push(data);
      });
      dispatch({
        type: GET_COINS,
        newData,
      });
    });
};

export const getOneCoin = (currentState, name) => (dispatch) => {
  const newState = currentState.map((coin) => {
    if (coin.id !== name) {
      return { ...coin, clicked: false };
    }
    return { ...coin, clicked: !coin.clicked };
  });
  dispatch({
    type: GET_ONE_COIN,
    newState,
  });
};

export default reducer;
