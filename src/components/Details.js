/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const data = useSelector((state) => state.coins);
  return (
    <div>
      <NavLink id="back" style={{ textDecoration: 'none', color: 'black' }} to="/Home" exact>
        Back
      </NavLink>
      <div>
        {
          data.filter(({ clicked }) => clicked).map(({
            name, id, change, max, price, symbol, volume, market,
          }) => (
            <div key={id} id={id}>
              <div id={id}>
                { name }
              </div>
              <div id={id}>
                { symbol }
                <br />
                <p>
                  maxSupply: {max === null ? <span> N/A </span> : max}
                </p>
                <br />
                <p>
                  Price: {price === null ? <span> N/A </span> : price}
                </p>
                <br />
                <p>
                  Change: { change === null ? <span> N/A </span> : change }
                </p>
                <br />
                <p>
                  Volume: { volume === null ? <span> N/A </span> : volume }
                </p>
                <br />
                <p>
                  Market: { market === null ? (<p>N/A</p>) : market }
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Details;
