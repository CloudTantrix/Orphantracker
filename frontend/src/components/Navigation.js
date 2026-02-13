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
          <img src="/logos/ujyalo-logo-icon.svg" alt="Ujyalo Bhavishya Abhiyan" height="40" className="me-2" />
          <span className="ms-2">Ujyalo Bhavishya Abhiyan</span>
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
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/how-we-help" onClick={() => setExpanded(false)}>
              How We Help
            </Nav.Link>
            <Nav.Link as={Link} to="/orphanages" onClick={() => setExpanded(false)}>
              Orphanages
            </Nav.Link>
            <Nav.Link as={Link} to="/impact" onClick={() => setExpanded(false)}>
              Impact
            </Nav.Link>
            <Nav.Link as={Link} to="/file-complaint" onClick={() => setExpanded(false)}>
              <Button variant="warning" size="sm" className="ms-2 px-3 fw-bold">
                📋 File Complaint
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/donate" onClick={() => setExpanded(false)}>
              <Button variant="success" size="sm" className="ms-2 px-3 fw-bold">
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
