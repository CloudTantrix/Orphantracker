import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-white py-6" style={{ background: 'linear-gradient(135deg, #B31217 0%, #FF8C00 100%)' }}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Ujyalo Bhavishya Abhiyan</h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem' }}>
                Protecting Nepal's vulnerable children through institutional monitoring, community engagement, and accountability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-4 h3">Who We Are</h2>
              <p className="lead mb-3 text-secondary">
                Orphan Tracker Nepal is a nonprofit organization dedicated to protecting vulnerable children across Nepal. We track and monitor orphans and abandoned children until they reach age 18 or achieve self-reliance, ensuring their safety, wellbeing, and dignity.
              </p>
              <p className="lead mb-3 text-secondary">
                In a country where thousands of children live in orphanages with varying levels of care, we provide critical oversight and accountability. We maintain transparent records of children's status, conduct regular facility assessments, investigate complaints, and empower communities to build awareness about child protection.
              </p>
              <p className="lead text-secondary">
                Our mission is simple: <strong>every child in Nepal deserves a safe environment, proper education, and a path to a dignified future.</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Nepal Needs This */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-4 h3">Why This Matters for Nepal</h2>
              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div style={{ fontSize: '2rem' }}>📊</div>
                    <div>
                      <h6 className="fw-bold">10,000+ Orphans</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>Officially in orphanages across Nepal, with many more living on streets or in unstable situations</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div style={{ fontSize: '2rem' }}>⚠️</div>
                    <div>
                      <h6 className="fw-bold">Poor Oversight</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>Many orphanages lack proper regulation, clear documentation, or accountability systems</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div style={{ fontSize: '2rem' }}>🚨</div>
                    <div>
                      <h6 className="fw-bold">Vulnerability</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>Without monitoring, children face risks of abuse, exploitation, trafficking, and neglect</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div style={{ fontSize: '2rem' }}>🌍</div>
                    <div>
                      <h6 className="fw-bold">Lost Futures</h6>
                      <p className="text-secondary mb-0" style={{ fontSize: '0.95rem' }}>Without proper tracking and planning, children age out of care with no education, skills, or support</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Core Values */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-5 h3">Our Core Values</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '2.5rem' }} className="mb-3">🛡️</div>
                  <h5 className="fw-bold mb-3">Child Protection</h5>
                  <p className="text-secondary">
                    Every child's safety and dignity is paramount
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '2.5rem' }} className="mb-3">📊</div>
                  <h5 className="fw-bold mb-3">Transparency</h5>
                  <p className="text-secondary">
                    Open, honest accountability in all our work
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '2.5rem' }} className="mb-3">🤝</div>
                  <h5 className="fw-bold mb-3">Community Action</h5>
                  <p className="text-secondary">
                    Empowering citizens to report and protect
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '2.5rem' }} className="mb-3">💡</div>
                  <h5 className="fw-bold mb-3">Systemic Change</h5>
                  <p className="text-secondary">
                    Building awareness and improving standards
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-4 h3">Our Team in Nepal</h2>
              <p className="text-secondary mb-5">
                Dedicated professionals working on the ground across Nepal
              </p>
            </Col>
          </Row>
              <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-3">👩‍💼</div>
                  <h6 className="fw-bold">Prabisha Sharma</h6>
                  <p className="text-secondary small mb-2">Executive Director</p>
                  <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
                    Former social worker, 8 years child protection experience in Kathmandu
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-3">👨‍💼</div>
                  <h6 className="fw-bold">Ram Bahadur Singh</h6>
                  <p className="text-secondary small mb-2">Field Operations</p>
                  <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
                    Manages orphanage monitoring across 7 districts
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-3">👩‍⚕️</div>
                  <h6 className="fw-bold">Dr. Anita Khatri</h6>
                  <p className="text-secondary small mb-2">Medical Coordinator</p>
                  <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
                    Ensures health and nutrition standards in monitored facilities
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-3">👨‍🎓</div>
                  <h6 className="fw-bold">Ashish Gupta</h6>
                  <p className="text-secondary small mb-2">Advocacy & Awareness</p>
                  <p className="text-secondary" style={{ fontSize: '0.85rem' }}>
                    Community engagement and consciousness building initiatives
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

{/* How We Work */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-5 h3 text-center">Our Approach</h2>
              <Row className="g-4">
                <Col md={6}>
                  <div className="text-center">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>1️⃣</div>
                    <h6 className="fw-bold mb-2">Register & Track</h6>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                      Maintain detailed records of every vulnerable child, ensuring we never lose sight of their situation or progress.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>2️⃣</div>
                    <h6 className="fw-bold mb-2">Monitor Facilities</h6>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                      Conduct regular assessments of orphanages to ensure compliance with safety, health, and education standards.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>3️⃣</div>
                    <h6 className="fw-bold mb-2">Investigate Complaints</h6>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                      Respond immediately to reports of abuse, neglect, or exploitation. Swift action saves lives.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="text-center">
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>4️⃣</div>
                    <h6 className="fw-bold mb-2">Build Awareness</h6>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>
                      Educate communities about child rights and protection, creating conscious citizens who advocate for children.
                    </p>
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
              <h2 className="fw-bold mb-4 h3">Help Us Protect Nepal's Children</h2>
              <p className="lead mb-5">
                Whether you're a concerned citizen, donor, partner organization, or advocate, you can make a difference. Support our monitoring work, file a complaint, or spread awareness about child protection.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/file-complaint">
                  <Button variant="light" size="lg" className="fw-bold">
                    🚨 Report a Concern
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="warning" size="lg" className="fw-bold">
                    💝 Donate
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

export default About;
