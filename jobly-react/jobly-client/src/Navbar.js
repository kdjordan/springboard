import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import './Navbar.css'

function NavBar({status}) {
  const [ isOpen, setIsOpen ] = useState(true)

  function toggle() {
    console.log('calling')
    setIsOpen(op => (op = !op))
  }

  if (!status) {
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
                      <NavLink to="/logout">Logout</NavLink>
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

// }
//     <nav className="nav">
//       <div className="nav-left">
//         <NavLink exact to="/">
//           Jobly
//         </NavLink>
//       </div>

//         <div className="nav-right">
//             <NavLink to="/companies">Companies</NavLink>
//             <NavLink to="/jobs">Jobs</NavLink>
//             <NavLink to="/profile">Profile</NavLink>
//             <NavLink to="/logout">Logout</NavLink>
//         </div>
//       </nav>
//   );
// }
}

export default NavBar;
