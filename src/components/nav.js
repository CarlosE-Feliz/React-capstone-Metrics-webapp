import React from 'react';
import { Navbar } from 'react-bootstrap';
import Items from './navItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Items />
      </Navbar.Brand>
    </Navbar>
  </>

);

export default NavBar;
