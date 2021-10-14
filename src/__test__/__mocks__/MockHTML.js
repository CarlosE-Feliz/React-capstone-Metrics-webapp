/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { getOneCoin } from '../../redux/coinsAPI';

export const Data = (props) => {
  const post = useSelector((state) => state.rock);
  const dispatch = useDispatch();
  const oneCoin = () => {
    dispatch(getOneCoin(post, props.id));
  };

  return (
    <NavLink
      style={{ textDecoration: 'none' }}
      className="propss"
      key={props.name}
      name={props.name}
      id={props.id}
      to="/Details"
    >
      <div key={props.id} id={props.id}>
        <Card.Content>
          <Card.Header
            id={props.id}
            className="cardprops"
            onClick={oneCoin}
          >
            {props.symbol}
          </Card.Header>
          <Card.Description
            className="cardprops"
          >
            {props.name}
          </Card.Description>
        </Card.Content>
      </div>
    </NavLink>
  );
};
