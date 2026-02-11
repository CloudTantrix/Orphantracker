import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      icon: '📋',
      title: 'Case Management',
      description: 'Comprehensive tracking and management of each child\'s care plan, including health, education, and social needs.',
      details: [
        'Individual care plan development',
        'Progress monitoring and reporting',
        'Multi-agency coordination',
        'Regular wellness assessments'
      ]
    },
    {
      icon: '👥',
      title: 'Guardian Matching',
      description: 'Careful assessment and matching of children with qualified and loving guardians.',
      details: [
        'Guardian screening and vetting',
        'Compatibility assessments',
        'Training and support programs',
        'Ongoing relationship monitoring'
      ]
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Ensuring access to quality medical care, mental health support, and preventive services.',
      details: [
        'Medical examinations and care',
        'Mental health counseling',
        'Vaccination and immunization',
        'Emergency medical support'
      ]
    },
    {
      icon: '📚',
      title: 'Education Support',
      description: 'Providing scholarships, tutoring, and resources to help children succeed academically.',
      details: [
        'Scholarship programs',
        'Tutoring and academic support',
        'School supplies and resources',
        'Career guidance and mentoring'
      ]
    },
    {
      icon: '🏠',
      title: 'Safe Housing',
      description: 'Secure, safe, and supportive living arrangements for all children in our program.',
      details: [
        'Safe housing placements',
        'Home safety inspections',
        'Residential support services',
        'Emergency shelter assistance'
      ]
    },
    {
      icon: '🎯',
      title: 'Life Skills Training',
      description: 'Preparing adolescents for independence with practical life skills and vocational training.',
      details: [
        'Independent living skills',
        'Vocational training',
        'Job placement assistance',
        'Financial literacy programs'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero bg-light py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Our Services</h1>
              <p className="lead text-muted">
                Comprehensive programs designed to support every aspect of a child's development
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="service-card shadow-sm h-100 border-0">
                  <Card.Body>
                    <div className="service-icon mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <Card.Title className="h5 fw-bold mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {service.description}
                    </Card.Text>
                    <ul className="service-details">
                      {service.details.map((detail, i) => (
                        <li key={i} className="text-muted small">✓ {detail}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How Services Work */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-5">How Our Services Work</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3} className="text-center">
              <div className="step-circle mb-3">1</div>
              <h5 className="fw-bold">Intake & Assessment</h5>
              <p className="text-muted">
                Comprehensive evaluation of each child's needs and circumstances
              </p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="step-circle mb-3">2</div>
              <h5 className="fw-bold">Care Planning</h5>
              <p className="text-muted">
                Development of individualized care plans addressing all needs
              </p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="step-circle mb-3">3</div>
              <h5 className="fw-bold">Service Delivery</h5>
              <p className="text-muted">
                Implementation of services across health, education, and wellness
              </p>
            </Col>
            <Col md={6} lg={3} className="text-center">
              <div className="step-circle mb-3">4</div>
              <h5 className="fw-bold">Monitoring & Support</h5>
              <p className="text-muted">
                Continuous follow-up to ensure progress and outcomes
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="h2 fw-bold mb-4">Help Support Our Services</h2>
              <p className="lead text-muted mb-4">
                Your donation directly supports the comprehensive services we provide to children in need.
              </p>
              <Link to="/donate">
                <Button variant="danger" size="lg" className="px-5">
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

export default Services;
