import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero bg-light py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">About Orphan Tracker</h1>
              <p className="lead text-muted">
                Our story, our values, and our commitment to children in need
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="h2 fw-bold mb-4">Who We Are</h2>
              <p className="lead mb-3">
                Orphan Tracker is a leading nonprofit organization dedicated to supporting 
                orphaned and abandoned children. Our integrated platform combines state-of-the-art 
                technology with compassionate care to ensure every child receives the support they deserve.
              </p>
              <p className="lead mb-3">
                Founded with a vision to break the cycle of abandonment and neglect, we work with 
                government agencies, private partners, and volunteers to provide comprehensive services 
                that transform lives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-5">Our Core Values</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="value-card text-center">
                <div className="value-icon mb-3">❤️</div>
                <h4 className="fw-bold mb-3">Compassion</h4>
                <p className="text-muted">
                  We lead with empathy and genuine care for every child
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="value-card text-center">
                <div className="value-icon mb-3">🎯</div>
                <h4 className="fw-bold mb-3">Excellence</h4>
                <p className="text-muted">
                  We pursue the highest standards in everything we do
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="value-card text-center">
                <div className="value-icon mb-3">🤝</div>
                <h4 className="fw-bold mb-3">Collaboration</h4>
                <p className="text-muted">
                  We believe in the power of partnerships and teamwork
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="value-card text-center">
                <div className="value-icon mb-3">💡</div>
                <h4 className="fw-bold mb-3">Innovation</h4>
                <p className="text-muted">
                  We leverage technology to improve outcomes
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-4">Leadership Team</h2>
              <p className="lead text-muted mb-5">
                Dedicated professionals committed to making a difference
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="team-card text-center">
                <div className="team-avatar mb-3">👩‍💼</div>
                <h5 className="fw-bold">Sarah Johnson</h5>
                <p className="text-muted small">Executive Director</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  20 years of experience in child welfare
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="team-card text-center">
                <div className="team-avatar mb-3">👨‍💼</div>
                <h5 className="fw-bold">Michael Chen</h5>
                <p className="text-muted small">Operations Manager</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Director of case management programs
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="team-card text-center">
                <div className="team-avatar mb-3">👩‍⚕️</div>
                <h5 className="fw-bold">Dr. Emily Rodriguez</h5>
                <p className="text-muted small">Medical Director</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Pediatrician and wellness coordinator
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="team-card text-center">
                <div className="team-avatar mb-3">👨‍🎓</div>
                <h5 className="fw-bold">James Williams</h5>
                <p className="text-muted small">Development Director</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  Fundraising and community engagement
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="h2 fw-bold mb-4">Ready to Make an Impact?</h2>
              <p className="lead mb-4">
                Join us in our mission to support and transform the lives of orphaned children.
              </p>
              <Link to="/donate">
                <Button variant="light" size="lg" className="text-primary fw-bold px-5">
                  💝 Donate Today
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
