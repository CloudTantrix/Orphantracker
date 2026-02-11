import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar-custom shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo fw-bold">
          <span className="brand-icon">🏠</span>
          <span className="ms-2">Orphan Tracker</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/impact" onClick={() => setExpanded(false)}>
              Impact
            </Nav.Link>
            <Nav.Link as={Link} to="/get-involved" onClick={() => setExpanded(false)}>
              Get Involved
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" onClick={() => setExpanded(false)}>
              <Button variant="danger" size="sm" className="ms-2 px-3">
                💝 Donate
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
