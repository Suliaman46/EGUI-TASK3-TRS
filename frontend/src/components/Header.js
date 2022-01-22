import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap/";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/Login" || location.pathname === "/") {
    return null;
  }
  return (
    <Navbar bg="black">
      <Container className="col-md-12">
        {/* <Navbar.Brand
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
        </Nav> */}
        <a
          href="#0"
          onClick={(e) => {
            e.preventDefault();
            navigate("/Home");
          }}
          className="text-white navbar-brand"
          style={{ fontWeight: "bold", cursor: "pointer" }}
        >
          Home
        </a>
        <Nav className="me-auto">
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              navigate("/AddEntry");
            }}
            className="text-white nav-link"
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Add Entry
          </a>
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              navigate("/AddActivity");
            }}
            className="text-white nav-link"
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Add Activity
          </a>
        </Nav>

        <Nav className="ms-auto">
          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              navigate("/MonthlyReport");
            }}
            className="text-white nav-link"
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Monthly Report
          </a>

          <a
            href="#0"
            onClick={(e) => {
              e.preventDefault();
              navigate("/Login");
            }}
            className="text-white nav-link"
            style={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Sign Out
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
