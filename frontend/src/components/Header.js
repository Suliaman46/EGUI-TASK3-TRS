import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap/";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  if (location.pathname === "/Login" || location.pathname === "/") {
    return null;
  }
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
          <Nav.Link
            href="/AddActivity"
            className="text-white "
            style={{ fontWeight: "bold" }}
          >
            Add Activity
          </Nav.Link>
        </Nav>

        <Nav className="ms-auto">
          <Nav.Link
            href="/MonthlyReport"
            className="text-white"
            style={{ fontWeight: "bold" }}
          >
            Monthly Report
          </Nav.Link>
          <Nav.Link
            href="/Login"
            className="text-white"
            style={{ fontWeight: "bold" }}
          >
            Sign Out
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
