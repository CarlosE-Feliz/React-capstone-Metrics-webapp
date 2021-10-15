import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import { getOneCoin } from '../../redux/coinsAPI';

const Data = ({ id, name, symbol }) => {
  const post = useSelector((state) => state.rock);
  const dispatch = useDispatch();
  const oneCoin = () => {
    dispatch(getOneCoin(post, id));
  };

  return (
    <NavLink
      style={{ textDecoration: 'none' }}
      className="propss"
      key={name}
      name={name}
      id={id}
      to="/Details"
    >
      <div key={id} id={id}>
        <Card.Content>
          <Card.Header
            id={id}
            className="cardprops"
            onClick={oneCoin}
          >
            {symbol}
          </Card.Header>
          <Card.Description
            className="cardprops"
          >
            {name}
          </Card.Description>
        </Card.Content>
      </div>
    </NavLink>
  );
};

Data.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Data;
