import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Impact.css';

function Impact() {
  const impactStats = [
    { label: 'Children Supported', value: 2500, color: 'primary' },
    { label: 'Guardians Engaged', value: 1200, color: 'success' },
    { label: 'Families Reunited', value: 450, color: 'info' },
    { label: 'Educational Scholarships', value: 380, color: 'warning' }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero bg-light py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Our Impact</h1>
              <p className="lead text-muted">
                Real numbers, real lives changed, real hope restored
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Statistics */}
      <section className="py-5">
        <Container>
          <Row className="g-4 mb-5">
            {impactStats.map((stat, index) => (
              <Col md={6} lg={3} key={index}>
                <div className="stat-box bg-light p-4 rounded">
                  <h4 className="h2 fw-bold text-primary mb-3">{stat.value.toLocaleString()}+</h4>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-5">Success Stories</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="story-card p-4 bg-white rounded shadow-sm">
                <div className="story-avatar mb-3">👦</div>
                <h5 className="fw-bold">Marcus's Journey</h5>
                <p className="text-muted small mb-3">
                  "When I arrived at Orphan Tracker, I thought no one cared about me. Now I have a family, 
                  attend a great school, and dream of becoming an engineer."
                </p>
                <small className="text-muted d-block">Marcus, age 14</small>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="story-card p-4 bg-white rounded shadow-sm">
                <div className="story-avatar mb-3">👧</div>
                <h5 className="fw-bold">Amara's Hope</h5>
                <p className="text-muted small mb-3">
                  "Through the education support program, I'm the first in my family to attend college. 
                  I'm studying to help other children like me."
                </p>
                <small className="text-muted d-block">Amara, age 19</small>
              </div>
            </Col>\n            <Col md={6} lg={4}>
              <div className="story-card p-4 bg-white rounded shadow-sm">
                <div className="story-avatar mb-3">👨‍👩‍👦</div>
                <h5 className="fw-bold">The Chen Family</h5>
                <p className="text-muted small mb-3">
                  "We became a family through the guardian matching program. Your support helped us build 
                  a beautiful life together."
                </p>
                <small className="text-muted d-block">The Chen Family</small>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Program Outcomes */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-5">Program Outcomes</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="outcome-box text-center p-4 bg-light rounded">
                <h4 className="text-success fw-bold">98%</h4>
                <p className="text-muted mb-0">Successful Placements</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="outcome-box text-center p-4 bg-light rounded">
                <h4 className="text-info fw-bold">95%</h4>
                <p className="text-muted mb-0">School Attendance Rate</p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="outcome-box text-center p-4 bg-light rounded">
                <h4 className="text-warning fw-bold">92%</h4>
                <p className="text-muted mb-0">Health Improvement</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Annual Report */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="h2 fw-bold mb-4">Transparent & Accountable</h2>
              <p className="lead text-muted mb-4">
                We believe in complete transparency about our work and impact. Download our annual report 
                to see exactly how your donations make a difference.
              </p>
              <Button variant="outline-primary" size="lg">
                📄 Download 2025 Annual Report
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="h2 fw-bold mb-4">Be Part of These Success Stories</h2>
              <p className="lead mb-4">
                Every dollar you donate directly supports a child's journey toward hope and healing.
              </p>
              <Link to="/donate">
                <Button variant="light" size="lg" className="text-primary fw-bold px-5">
                  💝 Donate Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Impact;
