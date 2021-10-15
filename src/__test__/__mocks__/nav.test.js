import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="/" active="true" exact="true">
          <Link id="back" className="back" to="/" exact> &#8249;</Link>
        </Link>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
