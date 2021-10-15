import React from 'react';
import { Navbar } from 'react-bootstrap';
import Items from './navItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <>
    <Navbar style={{ backgroundColor: '#ec4c8b' }}>
      <Items />
    </Navbar>
  </>

);

export default NavBar;
