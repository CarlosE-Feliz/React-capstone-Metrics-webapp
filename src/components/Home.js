import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { getOneCoin } from '../redux/coinsAPI';
import '../styles/home.css';

const Home = () => {
  const data = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const oneCoin = (e) => {
    dispatch(getOneCoin(data, e.target.id));
  };

  return (
    <div
      className="grid"
      role="button"
      tabIndex={0}
      key="main"
      onClick={oneCoin}
      onKeyDown={oneCoin}
    >
      {
          data.map((item) => (
            <NavLink
              style={{ textDecoration: 'none' }}
              className="items"
              key={item.name}
              name={item.name}
              id={item.id}
              to="/Details"
            >
              <div key={item.id} id={item.id}>
                <Card.Content id={item.id}>
                  <Card.Header
                    id={item.id}
                    className="cardItem"
                  >
                    <h2 id={item.id}>
                      {item.symbol}
                    </h2>
                  </Card.Header>
                  <Card.Description
                    id={item.id}
                    className="cardItem"
                  >
                    <h6 id={item.id}>
                      {item.name}
                    </h6>
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
