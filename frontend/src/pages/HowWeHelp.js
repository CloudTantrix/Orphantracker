import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Services.css';

function HowWeHelp() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero text-white py-6">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">How We Help Nepal's Children</h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem' }}>
                Our comprehensive approach to protecting, tracking, and supporting vulnerable children
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center mb-5">
              <h2 className="fw-bold">Our Core Programs</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={6}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">📍</div>
                  <Card.Title className="fw-bold mb-3 h5">Child Tracking & Monitoring System</Card.Title>
                  <Card.Text className="text-secondary">
                    We maintain a comprehensive database of orphaned and vulnerable children across Nepal. 
                    Each child's development, health, education, and welfare is tracked from intake until they 
                    reach 18 years or become self-reliant citizens.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">⚖️</div>
                  <Card.Title className="fw-bold mb-3 h5">Direct Complaint Filing System</Card.Title>
                  <Card.Text className="text-secondary">
                    Anyone can file detailed complaints about child welfare concerns, abuse, or unsafe conditions. 
                    Our system ensures confidentiality while enabling us to investigate and take swift protective action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🏛️</div>
                  <Card.Title className="fw-bold mb-3 h5">Orphanage Assessment & Accountability</Card.Title>
                  <Card.Text className="text-secondary">
                    We monitor and assess orphanages throughout Nepal, tracking their reputation, compliance, 
                    and care standards. Transparent ratings help protect children and guide donors.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🤝</div>
                  <Card.Title className="fw-bold mb-3 h5">Guardian Support & Placement</Card.Title>
                  <Card.Text className="text-secondary">
                    We connect children with qualified guardians, foster families, and support networks. 
                    Our team ensures safe placements and ongoing relationship monitoring.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">📚</div>
                  <Card.Title className="fw-bold mb-3 h5">Education & Development Programs</Card.Title>
                  <Card.Text className="text-secondary">
                    We provide access to quality education, vocational training, and life skills development 
                    to prepare children for self-reliance and productive futures.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={6}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🧠</div>
                  <Card.Title className="fw-bold mb-3 h5">Awareness & Consciousness Building</Card.Title>
                  <Card.Text className="text-secondary">
                    We create mindfulness about child welfare issues through education, community outreach, 
                    and engagement programs that build a generation of conscious citizens.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-3">Our Process</h2>
              <p className="lead text-secondary">How we protect and support every child</p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="process-step text-center">
                <div className="step-number">1</div>
                <h5 className="fw-bold">Identify & Register</h5>
                <p className="text-secondary">
                  We identify vulnerable children and register them in our tracking system with complete information about their situation and needs.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="process-step text-center">
                <div className="step-number">2</div>
                <h5 className="fw-bold">Assess & Plan</h5>
                <p className="text-secondary">
                  We conduct thorough assessments of each child's health, education, emotional, and social needs. We create personalized support plans.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="process-step text-center">
                <div className="step-number">3</div>
                <h5 className="fw-bold">Monitor & Support</h5>
                <p className="text-secondary">
                  We continuously monitor progress, provide needed resources, coordinate support services, and track development until self-reliance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HowWeHelp;
