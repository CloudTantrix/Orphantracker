import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <Container fluid className="home-section">
      <Row className="align-items-center min-vh-100">
        <Col md={6} className="text-center text-md-start">
          <h1 className="display-4 fw-bold mb-4">Orphan Tracker System</h1>
          <p className="lead mb-4">
            A comprehensive solution for tracking and managing orphan information,
            ensuring better care and support.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" className="px-4 gap-3">
                Get Started
              </Button>
            </Link>
            <Button variant="outline-secondary" size="lg">
              Learn More
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="hero-image text-center">
            <h2>Welcome to Orphan Tracker</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
