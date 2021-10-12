import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ItemsUl, LiItems } from '../styles/stylesNav';
import Items from './navItems';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <ItemsUl>
            <LiItems>
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/Home" exact>
                Home
              </NavLink>
            </LiItems>
            <LiItems>
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/Details">
                Details
              </NavLink>
            </LiItems>
          </ItemsUl>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
        <Items />
      </Navbar.Brand>
    </Navbar>
  </>

);

export default NavBar;
