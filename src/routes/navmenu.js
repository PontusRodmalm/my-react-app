import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";

export default function NavMenu() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>Amped Up!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="../">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="../artistpage">
            List of music groups
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
