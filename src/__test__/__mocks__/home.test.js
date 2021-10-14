/* eslint-disable no-unused-vars */
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import Home from '../../components/Home';
import { Data } from './MockHTML';

describe('Test button Homes', () => {
  it('snapshot test', async () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home>
            <Data id="1" name="test" symbol="TEST" />
          </Home>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Data id="1" name="test" symbol="BTC" />
        </BrowserRouter>
      </Provider>,
    );
    screen.getByText('test');
    expect(screen.getByText('BTC')).toMatchSnapshot();
  });
});
