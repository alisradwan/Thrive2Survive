import React from "react";
import { LinkContainer } from "react-router-bootstrap";

// import bootstrap components
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import custom components
import ContactIcons from "../ContactIcons";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-light shadow">
        <LinkContainer to="/Home">
          <Nav.Link>
            <h6 className="headerTitle">Thrive2Survive</h6>
          </Nav.Link>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ali">
            <LinkContainer to="/Home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ourWork">
              <Nav.Link>Our work</Nav.Link>
            </LinkContainer>
            <LinkContainer to="Donations">
              <Nav.Link>Donations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="EventRegistration">
              <Nav.Link>Event Registration</Nav.Link>
            </LinkContainer>
            <LinkContainer to="OurBoardOfDirectors">
              <Nav.Link>Our Board of Directors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="Connections">
              <Nav.Link>Connections</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <ContactIcons></ContactIcons>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
