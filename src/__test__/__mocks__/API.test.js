/* eslint-disable global-require */
const axios = require('axios');

jest.mock('axios');

describe('mock api calls', () => {
  test('end point in axios ', () => {
    const mockedResponse = { data: { id: 'bitcoin', rank: '1' } };
    axios.get.mockResolvedValue(mockedResponse);
    const app = require('./mocksAPI');
    app.getCoins();
  });
});
