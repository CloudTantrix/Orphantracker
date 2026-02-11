import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="hero-content">
              <h1 className="display-3 fw-bold mb-4 text-white">
                Hope, Healing, and Justice
              </h1>
              <p className="lead text-white mb-4" style={{ fontSize: '1.5rem' }}>
                Breaking the cycle of abandonment, one child at a time.
              </p>
              <div className="d-flex gap-3">
                <Link to="/donate">
                  <Button variant="danger" size="lg" className="px-5 py-3">
                    💝 Donate Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="light" size="lg" className="px-5 py-3 text-dark">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h1 mb-4 fw-bold">Our Mission</h2>
              <p className="lead text-muted mb-0" style={{ fontSize: '1.25rem' }}>
                We are dedicated to providing comprehensive support to orphaned and abandoned 
                children by tracking their welfare, coordinating care, and ensuring they receive 
                the resources they need to thrive.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats py-5 bg-light">
        <Container>
          <Row className="text-center g-4 mb-5">
            <Col md={3}>
              <div className="stat-card">
                <h3 className="display-4 text-primary fw-bold">2,500+</h3>
                <p className="lead">Children Supported</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h3 className="display-4 text-success fw-bold">1,200+</h3>
                <p className="lead">Guardians Engaged</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h3 className="display-4 text-info fw-bold">800+</h3>
                <p className="lead">Volunteers</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-card">
                <h3 className="display-4 text-warning fw-bold">98%</h3>
                <p className="lead">Placement Success</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="services-section py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h1 fw-bold mb-4">How We Help</h2>
              <p className="lead text-muted mb-0">Comprehensive services to support children and families</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="service-card shadow-sm h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">📋</div>
                  <Card.Title>Case Management</Card.Title>
                  <Card.Text className="text-muted">
                    Track and manage comprehensive care plans for each child
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="service-card shadow-sm h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">👥</div>
                  <Card.Title>Guardian Matching</Card.Title>
                  <Card.Text className="text-muted">
                    Connect children with caring and qualified guardians
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="service-card shadow-sm h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🏥</div>
                  <Card.Title>Health & Wellness</Card.Title>
                  <Card.Text className="text-muted">
                    Ensure access to medical care and mental health support
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="service-card shadow-sm h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">📚</div>
                  <Card.Title>Education Support</Card.Title>
                  <Card.Text className="text-muted">
                    Provide scholarships and academic resources
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col>
              <Link to="/services">
                <Button variant="outline-primary" size="lg">
                  View All Services
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="h2 fw-bold mb-3">You Can Make a Difference</h2>
              <p className="lead mb-0">
                Whether through donations, volunteering, or spreading awareness, 
                your contribution can transform a child's life.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end mt-4 mt-lg-0">
              <Link to="/get-involved">
                <Button variant="light" size="lg" className="text-primary fw-bold px-5">
                  Get Involved
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
