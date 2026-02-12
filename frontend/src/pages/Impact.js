import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Impact.css';

function Impact() {
  const impactStats = [
    { label: 'Children Tracked', value: 2850, unit: '+' },
    { label: 'Orphanages Monitored', value: 145, unit: '+' },
    { label: 'Complaints Investigated', value: 520, unit: '+' },
    { label: 'Safety Compliance Rate', value: 98, unit: '%' }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero text-white py-6" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Our Impact Across Nepal</h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem' }}>
                Measurable results protecting vulnerable children, ensuring accountability, and building safer communities
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Statistics */}
      <section className="py-6">
        <Container>
          <Row className="g-4 mb-5">
            {impactStats.map((stat, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="border-0 shadow-sm text-center">
                  <Card.Body className="py-5">
                    <h3 className="fw-bold text-primary mb-3" style={{ fontSize: '2.5rem' }}>
                      {stat.value}{stat.unit}
                    </h3>
                    <p className="text-secondary mb-0">{stat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-5 h3">How We Create Impact</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 style={{ fontSize: '2.5rem' }} className="mb-3">📊</h5>
                  <h6 className="fw-bold mb-3">Track & Monitor</h6>
                  <p className="text-secondary mb-0">
                    We maintain comprehensive records of every child, ensuring continuity of care and protection from age 0 to 18.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 style={{ fontSize: '2.5rem' }} className="mb-3">🛡️</h5>
                  <h6 className="fw-bold mb-3">Assess Facilities</h6>
                  <p className="text-secondary mb-0">
                    Regular audits of 145+ orphanages to ensure safety standards, proper nutrition, education access, and child protection.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 style={{ fontSize: '2.5rem' }} className="mb-3">📞</h5>
                  <h6 className="fw-bold mb-3">Investigate Complaints</h6>
                  <p className="text-secondary mb-0">
                    Rapid response to reported concerns about abuse, neglect, or exploitation. Swift action protects children from harm.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 style={{ fontSize: '2.5rem' }} className="mb-3">👥</h5>
                  <h6 className="fw-bold mb-3">Guardian Support</h6>
                  <p className="text-secondary mb-0">
                    Equip caretakers with training and resources to provide better care, education, and emotional support to children.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 style={{ fontSize: '2.5rem' }} className="mb-3">📚</h5>
                  <h6 className="fw-bold mb-3">Education Programs</h6>
                  <p className="text-secondary mb-0">
                    Ensure children access quality education and develop skills to become self-reliant, independent adults.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h5 style={{ fontSize: '2.5rem' }} className="mb-3">💡</h5>
                  <h6 className="fw-bold mb-3">Build Awareness</h6>
                  <p className="text-secondary mb-0">
                    Community education about child rights, abuse prevention, and proper care. Creating conscious citizens who protect children.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-5 h3">Stories of Change</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h6 className="fw-bold mb-3">Kali's Education Journey</h6>
                  <p className="text-secondary mb-3" style={{ fontSize: '0.95rem' }}>
                    "We found 8-year-old Kali living on the streets. Through our program, she's now in school, thriving academically, and dreams of becoming a teacher to help other orphans."
                  </p>
                  <small className="text-muted">Kathmandu | Age 8</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h6 className="fw-bold mb-3">Rohit's Safety Victory</h6>
                  <p className="text-secondary mb-3" style={{ fontSize: '0.95rem' }}>
                    "A complaint revealed abuse at Rohit's orphanage. We investigated, staff were removed, and conditions improved. Rohit is now safe and receiving proper care."
                  </p>
                  <small className="text-muted">Pokhara | Age 11</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h6 className="fw-bold mb-3">Priya's Self-Reliance</h6>
                  <p className="text-secondary mb-3" style={{ fontSize: '0.95rem' }}>
                    "We tracked Priya through 12 years in orphanage. At 18, we provided job training. She now works as a nurse, supporting her own family."
                  </p>
                  <small className="text-muted">Janakpur | Age 22 (aged out successfully)</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

{/* Transparency & Accountability */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="fw-bold mb-4 h3">Transparent & Accountable</h2>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
                We believe in complete transparency about our work. Every investigation, every assessment, every dollar spent is documented and available for public review.
              </p>
              <Button variant="outline-primary" size="lg" className="fw-bold">
                📄 Download 2025 Annual Report
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Where Your Donations Go */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-5 h3 text-center">Where Your Donations Go</h2>
              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex gap-3 mb-4">
                    <div style={{ minWidth: '40px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#2563eb', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        35%
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold">Monitoring & Assessments</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                        Field assessments, staff training, facility audits to ensure child safety standards.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3 mb-4">
                    <div style={{ minWidth: '40px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#10b981', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        25%
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold">Investigations & Responses</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                        Complaint response, investigation, protective interventions, legal support.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3 mb-4">
                    <div style={{ minWidth: '40px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#f59e0b', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        20%
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold">Child Support Programs</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                        Education, healthcare, skills training, age-out support for 18+ youth.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3 mb-4">
                    <div style={{ minWidth: '40px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#8b5cf6', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        15%
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold">Awareness & Advocacy</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                        Community education, consciousness building, policy advocacy for child protection.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div style={{ minWidth: '40px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        backgroundColor: '#6b7280', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        5%
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold">Administration</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>
                        Salaries, technology, office, compliance - kept minimal for maximum impact.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-6 bg-primary text-white">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="fw-bold mb-4 h3">Be Part of This Impact</h2>
              <p className="lead mb-5">
                Every donation directly protects a child. Every report ensures accountability. Every citizen aware means a safer Nepal for vulnerable children.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/donate">
                  <Button variant="light" size="lg" className="fw-bold">
                    💝 Donate
                  </Button>
                </Link>
                <Link to="/file-complaint">
                  <Button variant="warning" size="lg" className="fw-bold">
                    🚨 Report Concern
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Impact;
