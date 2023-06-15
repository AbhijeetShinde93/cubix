import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="navigation">
        <Navbar.Brand href="/" id="brand-logo">
          <img
            src={process.env.PUBLIC_URL + "/icons/mainlogo.jpg"}
            className="DOCLOgo"
            alt="logo"
          />
              <h1>Med relience llc company</h1>
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
          <Link to="contactus">
            <button type="button" className="btn btn-Enquiry">
              ENQUIRY NOW
            </button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
