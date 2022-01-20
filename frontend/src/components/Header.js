import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap/";

const Header = () => {
  return (
    <Navbar bg="black">
      <Container className="col-md-12">
        <Navbar.Brand
          href="/Home"
          className="text-white "
          style={{ fontWeight: "bold" }}
        >
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/AddEntry"
            className="text-white "
            style={{ fontWeight: "bold" }}
          >
            Add Entry
          </Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link
            href="/Login"
            className="text-white"
            style={{ fontWeight: "bold" }}
          >
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
