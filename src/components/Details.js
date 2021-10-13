import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Details.css';

const Details = () => {
  const data = useSelector((state) => state.coins);
  return (
    <div>
      <div className="detailMain">
        <NavLink id="back" className="back" to="/Home" exact>
          &#8249;
        </NavLink>
        {
          data.filter(({ clicked }) => clicked).map(({
            name, id, change, max, price, explore, volume, market,
          }) => (
            <div key={id} id={id} className="details">
              <div id={id} className="detailHead">
                <h3 className="title">
                  {' '}
                  { name }
                  {' '}
                </h3>
              </div>
              <div id={id} className="detail">
                <div className="detailItem">
                  <p>
                    MaxSupply:
                    {' '}
                    {max === null ? <span> N/A </span> : max}
                  </p>
                </div>

                <div className="detailItem">
                  <p>
                    Price:
                    {' '}
                    {price === null ? <span> N/A </span> : price}
                  </p>
                </div>

                <div className="detailItem">
                  <p>
                    Change:
                    {' '}
                    { change === null ? <span> N/A </span> : change }
                  </p>
                </div>

                <div className="detailItem">
                  <p>
                    Volume:
                    {' '}
                    { volume === null ? <span> N/A </span> : volume }
                  </p>
                </div>

                <div className="detailItem">
                  <p>
                    Market:
                    {' '}
                    { market === null ? (<p>N/A</p>) : market }
                  </p>
                </div>

                <footer>
                  { explore === null ? null : <a href={explore} target="_blank" rel="noreferrer"> More info here</a> }
                </footer>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Details;
