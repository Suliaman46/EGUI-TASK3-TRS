import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap/";

const Header = () => {
  return (
    <Navbar bg="primary">
      <Container className="col-md-12">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="/AddEntry" className="text-white">
            Add Entry
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
