import React from "react";
import "./Nav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbarr = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">
            <img src="../Theme/logo 2.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-content">
              <a className="nav" href="/">
                Home
              </a>
              <a className="nav" href="/customer">
                Customers
              </a>
              <a className="nav" href="/busincess">
                Merchant
              </a>
              <a className="nav" href=" /developer refrence">
                DeveloperRefrence
              </a>
              <a className="nav" href="/support">
                Support
              </a>
              <a className="nav" href="/contact">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
