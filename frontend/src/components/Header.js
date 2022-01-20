import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap/";

const Header = () => {
  return (
    <Navbar bg="primary">
      <Container className="col-md-12">
        <Navbar.Brand
          href="/"
          className="text-white "
          style={{ fontWeight: "bold" }}
        >
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link href="/" className="text-white">
            Home
          </Nav.Link> */}
          <Nav.Link
            href="/AddEntry"
            className="text-white "
            style={{ fontWeight: "bold" }}
          >
            Add Entry
          </Nav.Link>
          {/* <Nav.Link href="/EditEntry" className="text-white">
            Edit Entry
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
