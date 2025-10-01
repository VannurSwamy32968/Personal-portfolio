import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import "./Navigation.css";

export default function Navigation() {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm custom-navbar">
      <Container className="contain">
        {/* <Navbar.Brand className="fw-bold text-light fs-4" href="/">
          🚀 Swamy
        </Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto Content" >
            <LinkContainer to="/" style={{textDecoration:"none"}}>
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" style={{textDecoration:"none"}}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/skills" style={{textDecoration:"none"}}>
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/projects" style={{textDecoration:"none"}}>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/education" style={{textDecoration:"none"}}>
              <Nav.Link>Education</Nav.Link>
            </LinkContainer>
           
            <LinkContainer to="/contact" style={{textDecoration:"none"}}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
