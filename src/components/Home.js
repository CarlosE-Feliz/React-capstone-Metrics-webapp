/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { getOneCoin } from '../redux/coinsAPI';

const Home = () => {
  const data = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const oneCoin = (e) => {
    dispatch(getOneCoin(data, e.target.id));
  };

  return (
    <div className="grid" onClick={oneCoin}>
      {
          data.map((item) => (
            <NavLink
              style={{ textDecoration: 'none', color: 'black' }}
              key={item.name}
              name={item.name}
              id={item.id}
              to="/Details"
            >
              <div className="items" key={item.id} id={item.id}>
                <Card.Content id={item.id}>
                  <Card.Header id={item.id}>
                    {item.symbol}
                  </Card.Header>
                  <Card.Description id={item.id}>
                    {item.name}
                  </Card.Description>
                </Card.Content>
              </div>
            </NavLink>
          ))
      }
    </div>
  );
};
export default Home;
