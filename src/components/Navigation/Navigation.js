import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Button, Nav } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="navigation">
        <Navbar.Brand href="/" id="brand-logo">
          Cubix Infotech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
            <Nav.Link href="/ourservices">Services</Nav.Link>
            <Nav.Link href="/contactus">Contact</Nav.Link>
          </Nav>
          <button type="button" className="btn btn-Enquiry">
            ENQUIRY NOW
          </button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
