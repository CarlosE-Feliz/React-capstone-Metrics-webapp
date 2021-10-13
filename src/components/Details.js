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
          data.filter(({ clicked }) => clicked).map(({ name, id }) => (
            <div key={id} id={id}>
              <div id={id}>
                { name }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Details;
