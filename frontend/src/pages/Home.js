import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ background: 'linear-gradient(135deg, #B31217 0%, #FF8C00 100%)' }}>
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center" style={{ minHeight: '80vh' }}>
            <Col lg={10} className="hero-content">
              <h1 className="display-3 fw-bold mb-4 text-white">
                Safe Children. Bright Futures.
              </h1>
              <p className="lead text-white mb-5" style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>
                Ujyalo Bhavishya Abhiyan protects Nepal's vulnerable children through institutional monitoring, 
                community reporting, and direct action. Every child deserves safety and opportunity to thrive.
              </p>
              <div className="hero-buttons">
                <Link to="/file-complaint">
                  <Button className="px-5 py-3 fw-bold btn-primary" size="lg">
                    📋 Report a Concern
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button className="px-5 py-3 text-dark fw-bold btn-outline" size="lg">
                    💝 Support Us
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Focus - What We Do */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center mb-5">
              <h2 className="fw-bold mb-3">What We Do</h2>
              <p className="lead text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
                Our comprehensive approach ensures every child in our network receives protection, care, and opportunity
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="service-card h-100 glass">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">📍</div>
                  <Card.Title className="fw-bold mb-3">Track & Monitor</Card.Title>
                  <Card.Text className="text-secondary">
                    We maintain detailed records of orphaned children across Nepal, tracking their welfare and development from childhood until they become self-reliant at 18.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card h-100 glass">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">⚖️</div>
                  <Card.Title className="fw-bold mb-3">File & Investigate Complaints</Card.Title>
                  <Card.Text className="text-secondary">
                    Anyone can directly report child welfare concerns with detailed information. We investigate all complaints and take action to protect vulnerable children.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card h-100 glass">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🤝</div>
                  <Card.Title className="fw-bold mb-3">Provide Support</Card.Title>
                  <Card.Text className="text-secondary">
                    We connect children with essential services, guardians, education programs, and build a network of support for their development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card h-100 glass">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🏛️</div>
                  <Card.Title className="fw-bold mb-3">Monitor Orphanages</Card.Title>
                  <Card.Text className="text-secondary">
                    We track and assess orphanage facilities across Nepal, maintaining transparency and accountability to ensure children's safety and welfare.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card h-100 glass">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">🧠</div>
                  <Card.Title className="fw-bold mb-3">Build Awareness</Card.Title>
                  <Card.Text className="text-secondary">
                    We create mindfulness and consciousness about child welfare issues, turning supporters into advocates for children's rights.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="service-card h-100 glass">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">❤️</div>
                  <Card.Title className="fw-bold mb-3">Sustain Through Donations</Card.Title>
                  <Card.Text className="text-secondary">
                    Your donations fuel our programs, support children's needs, and help us expand our reach across Nepal's vulnerable communities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-3">Our Impact in Nepal</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="stat-card glass">
                <h3 className="stat-number">2,500+</h3>
                <p className="stat-label">Children Tracked & Supported</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="stat-card glass">
                <h3 className="stat-number">145</h3>
                <p className="stat-label">Orphanages Monitored</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="stat-card glass">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Complaints Investigated</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="stat-card glass">
                <h3 className="stat-number">98%</h3>
                <p className="stat-label">Safety Assessment Rate</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why It Matters */}
      <section className="py-6">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">Why This Matters</h2>
              <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Thousands of children across Nepal live without proper support or protection. 
                Many orphanages operate without accountability, and vulnerable children have no voice.
              </p>
              <p className="text-secondary mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                Ujyalo Bhavishya Abhiyan changes this by:
              </p>
              <ul className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                <li>📋 Creating transparent systems to track child welfare</li>
                <li>⚖️ Empowering communities to report and stop abuse</li>
                <li>🛡️ Ensuring every child's safety is monitored</li>
                <li>🧠 Building a generation of conscious, aware citizens</li>
              </ul>
            </Col>
            <Col lg={6}>
              <Card className="shadow-lg border-0 glass">
                <Card.Body className="p-5 bg-light-blue">
                  <h4 className="fw-bold mb-3">Our Motto</h4>
                  <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#2563eb', fontWeight: '600' }}>
                    "Protecting Children's Welfare • Creating Safe Environments • Building Conscious Citizens"
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-6">
        <Container>
          <Row className="text-center">
            <Col lg={10} className="offset-lg-1">
              <h2 className="fw-bold mb-4 text-white">Every Child Deserves Protection</h2>
              <p className="lead text-white mb-5" style={{ fontSize: '1.25rem' }}>
                Be part of the solution. File a complaint, donate, or spread awareness today.
              </p>
              <div className="cta-buttons">
                <Link to="/file-complaint">
                  <Button variant="warning" size="lg" className="px-5 py-3 fw-bold">
                    📋 Report a Concern
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="light" size="lg" className="px-5 py-3 text-primary fw-bold">
                    💝 Make a Donation
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

export default Home;
