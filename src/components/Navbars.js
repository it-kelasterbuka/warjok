import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Warjok</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
