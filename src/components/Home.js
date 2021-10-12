/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';

const Home = () => {
  const data = useSelector((state) => state.coins);
  return (
    <div>
      {
          data.map((item) => (
            <Card>
              <Card.Content>
                <Card.Header>
                  {item.symbol}
                </Card.Header>
                <Card.Description>
                  {item.name}
                </Card.Description>
              </Card.Content>
            </Card>
          ))
      }
    </div>
  );
};
export default Home;
