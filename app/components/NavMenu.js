import React from "react"
import {
  Navbar,
  Nav,
  NavItem
} from "react-bootstrap"

class NavMenu extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">My Weather App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {
              this.props.isNav &&
              <Nav>
                <NavItem eventKey={1} href="#current-city">
                  Weather
                </NavItem>
                <NavItem eventKey={2} href="#forecast-info">
                  Forecast
                </NavItem>
              </Nav>
            }
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavMenu;
