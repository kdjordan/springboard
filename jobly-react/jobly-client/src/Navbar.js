import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from './UserContext'
import './Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

function NavBar({ logout }) {
  const [ isOpen, setIsOpen ] = useState(true)
  const { currentUser } = useContext(UserContext)

  function toggle() {
    setIsOpen(op => (op = !op))
  }

  function doLogout() {
    logout()
  }

  if (!currentUser) {
    return (
      <div>
        <Navbar className="Navigation navbar navbar-expand-md">
          <NavbarBrand href="/">JOBLY</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/login">Log in</NavLink>      
            </NavItem>
            <NavItem>
              <NavLink to="/signup">Sign up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

    )
  } else {

    return (
      <div>
        <Navbar className="Navigation navbar navbar-expand-md">
          <NavbarBrand href="/">JOBLY</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={!isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/companies">Companies</NavLink>      
              </NavItem>
              <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile">Profile</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavItem>
                      <NavLink to="/" onClick={doLogout}>Logout {currentUser.username}</NavLink>
                    </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

}

export default NavBar;
