import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCoin } from '../redux/coinsAPI';
import { ItemsNav, Title } from '../styles/stylesNav';
import '../styles/home.css';

const Items = () => {
  const items = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  const oneCoin = (e) => {
    dispatch(getOneCoin(items, e.target.id));
  };
  return (
    <ItemsNav>
      <Title>
        Crypto Values
      </Title>
      <Dropdown className="filter">
        <Dropdown.Toggle id="dropdown-basic" className="toggle">
          Select a coin
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ backgroundColor: 'rgb(236, 76, 139)' }}>
          {
            items.map((item) => (
              <Dropdown.Item
                id={item.id}
                key={item.id}
                onClick={oneCoin}
              >
                <NavLink to="/Details" id={item.id} style={{ textDecoration: 'none', color: 'aliceblue' }} onClick={oneCoin}>
                  {item.name}
                </NavLink>
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </ItemsNav>
  );
};

export default Items;
