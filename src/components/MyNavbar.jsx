import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const MyNavbar = function () {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="overb">
          <img src="logo.png" width="100" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="overfooter">
              Home
            </Nav.Link>
            <Nav.Link className="overfooter" href="#">
              Tv Show
            </Nav.Link>
            <Nav.Link className="overfooter" href="#">
              Movies
            </Nav.Link>
            <Nav.Link className="overfooter" href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link className="overfooter" href="#">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex text-secondary align-items-center">
            <i className="bi bi-search px-3 overfooter"></i>
            <Nav.Link className="nav-link px-3 overfooter" href="#">
              KIDS
            </Nav.Link>
            <i className="bi bi-bell-fill px-3 overfooter"></i>
            <NavDropdown
              title={<img src="kids.png" width="70" alt="kids" />}
              id="basic-nav-dropdown"
              className="me-5"
            >
              <NavDropdown.Item href="#">Edit Profiles</NavDropdown.Item>
              <NavDropdown.Item to="/account">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
