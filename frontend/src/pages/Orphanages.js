import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Badge } from 'react-bootstrap';
import Button from '../components/ui/Button';
import '../styles/Donate.css';

function Orphanages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Mock data for orphanages
  const orphanagesData = [
    {
      id: 1,
      name: 'Hope Children\'s Home',
      location: 'Kathmandu',
      district: 'Kathmandu',
      childrenCount: 45,
      staffCount: 12,
      rating: 4.8,
      compliance: 'compliant',
      lastAssessment: '2024-01-15',
      status: 'Excellent'
    },
    {
      id: 2,
      name: 'Sunshine Orphanage',
      location: 'Lalitpur',
      district: 'Kathmandu',
      childrenCount: 32,
      staffCount: 8,
      rating: 4.6,
      compliance: 'compliant',
      lastAssessment: '2024-01-10',
      status: 'Excellent'
    },
    {
      id: 3,
      name: 'Happy Hearts Care',
      location: 'Pokhara',
      district: 'Kaski',
      childrenCount: 28,
      staffCount: 7,
      rating: 4.2,
      compliance: 'attention',
      lastAssessment: '2024-01-05',
      status: 'Needs Attention'
    },
    {
      id: 4,
      name: 'New Life Foundation',
      location: 'Janakpur',
      district: 'Dhanusha',
      childrenCount: 52,
      staffCount: 14,
      rating: 4.4,
      compliance: 'compliant',
      lastAssessment: '2023-12-20',
      status: 'Excellent'
    },
    {
      id: 5,
      name: 'Children\'s Safe Haven',
      location: 'Chitwan',
      district: 'Chitwan',
      childrenCount: 38,
      staffCount: 10,
      rating: 3.8,
      compliance: 'attention',
      lastAssessment: '2024-01-08',
      status: 'Needs Attention'
    },
    {
      id: 6,
      name: 'Future Stars Home',
      location: 'Biratnagar',
      district: 'Morang',
      childrenCount: 42,
      staffCount: 11,
      rating: 4.3,
      compliance: 'compliant',
      lastAssessment: '2024-01-12',
      status: 'Excellent'
    },
    {
      id: 7,
      name: 'Resilient Children Center',
      location: 'Kathmandu',
      district: 'Kathmandu',
      childrenCount: 35,
      staffCount: 9,
      rating: 3.5,
      compliance: 'issues',
      lastAssessment: '2023-12-25',
      status: 'Issues Identified'
    },
    {
      id: 8,
      name: 'Bright Future Kids',
      location: 'Pokhara',
      district: 'Kaski',
      childrenCount: 29,
      staffCount: 8,
      rating: 4.5,
      compliance: 'compliant',
      lastAssessment: '2024-01-14',
      status: 'Excellent'
    }
  ];

  const filteredOrphanages = orphanagesData.filter(org => {
    const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         org.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || org.district === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const getComplianceBadge = (compliance) => {
    switch(compliance) {
      case 'compliant':
        return <Badge bg="success">Compliant</Badge>;
      case 'attention':
        return <Badge bg="warning" text="dark">Needs Attention</Badge>;
      case 'issues':
        return <Badge bg="danger">Issues Identified</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return '#10b981';
    if (rating >= 4.0) return '#B31217';
    if (rating >= 3.5) return '#f59e0b';
    return '#ef4444';
  };

  const locations = ['all', 'Kathmandu', 'Kaski', 'Dhanusha', 'Chitwan', 'Morang'];

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero text-white py-6">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Orphanage Monitoring</h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem' }}>
                Track monitored orphanages across Nepal. View compliance status, safety assessments, and ratings.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="g-4 mb-5">
            <Col md={4}>
              <Card className="border-0 shadow-sm text-center glass">
                <Card.Body className="py-5">
                  <h3 className="fw-bold text-primary" style={{ fontSize: '2.5rem' }}>145</h3>
                  <p className="text-secondary">Orphanages Monitored</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm text-center">
                <Card.Body className="py-5">
                  <h3 className="fw-bold text-success" style={{ fontSize: '2.5rem' }}>2,850+</h3>
                  <p className="text-secondary">Children Protected</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 shadow-sm text-center">
                <Card.Body className="py-5">
                  <h3 className="fw-bold text-info" style={{ fontSize: '2.5rem' }}>98%</h3>
                  <p className="text-secondary">Safety Compliance</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search and Filter */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="offset-lg-1">
              <h2 className="fw-bold mb-4">Find an Orphanage</h2>
              
              <div className="mb-4">
                <InputGroup size="lg">
                  <InputGroup.Text className="bg-white border-primary">🔍</InputGroup.Text>
                  <Form.Control
                    placeholder="Search by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-primary"
                  />
                </InputGroup>
              </div>

              <div className="mb-5">
                <Form.Label className="fw-bold mb-3">Filter by District</Form.Label>
                <div className="d-flex flex-wrap gap-2">
                  {locations.map(location => (
                    <Button
                      key={location}
                      className={`${selectedLocation === location ? 'btn-primary' : 'btn-outline-primary'} text-capitalize btn-sm` }
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location === 'all' ? 'All Districts' : location}
                    </Button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Orphanages Grid */}
          <Row className="g-4">
            {filteredOrphanages.length > 0 ? (
              filteredOrphanages.map(org => (
                <Col lg={6} key={org.id}>
                  <Card className="border-0 shadow-sm h-100 orphanage-card glass" style={{ borderLeft: `5px solid ${getRatingColor(org.rating)}` }}>
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <h5 className="fw-bold mb-1">{org.name}</h5>
                          <p className="text-secondary mb-0">
                            📍 {org.location}, {org.district}
                          </p>
                        </div>
                        <div className="text-center">
                          <div style={{ fontSize: '2rem', color: getRatingColor(org.rating), fontWeight: 'bold' }}>
                            {org.rating}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#999' }}>Rating</div>
                        </div>
                      </div>

                      <div className="mb-3">
                        {getComplianceBadge(org.compliance)}
                      </div>

                      <Row className="g-3 mb-4 text-center">
                        <Col xs={6}>
                          <div className="bg-light p-2 rounded">
                            <div className="fw-bold">{org.childrenCount}</div>
                            <small className="text-secondary">Children</small>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="bg-light p-2 rounded">
                            <div className="fw-bold">{org.staffCount}</div>
                            <small className="text-secondary">Staff</small>
                          </div>
                        </Col>
                      </Row>

                      <div className="border-top pt-3 mb-3">
                        <small className="text-secondary">
                          Last Assessment: {new Date(org.lastAssessment).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </small>
                      </div>

                      <div className="d-grid gap-2">
                        <Button className="btn-outline-primary btn-sm fw-bold">
                          View Full Report
                        </Button>
                        <Button className="btn-outline-warning btn-sm fw-bold">
                          File a Complaint
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col lg={12} className="text-center py-5">
                <p className="text-secondary" style={{ fontSize: '1.1rem' }}>No orphanages found matching your search.</p>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Understanding Ratings */}
      <section className="py-6 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-5 text-center">Understanding Our Ratings</h2>
              
              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div>
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#10b981', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                      }}>
                        ✓
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Compliant (4.5+)</h6>
                      <small className="text-secondary">
                        Meets all safety standards, proper nutrition, education, and child protection protocols.
                      </small>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div>
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#B31217', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                      }}>
                        ✓
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Good (4.0-4.4)</h6>
                      <small className="text-secondary">
                        Good standards with minor areas for improvement in facilities or documentation.
                      </small>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div>
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#f59e0b', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                      }}>
                        ⚠
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Needs Attention (3.5-3.9)</h6>
                      <small className="text-secondary">
                        Multiple areas requiring improvement. We are working with facility to improve standards.
                      </small>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex gap-3">
                    <div>
                      <div style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: '#ef4444', 
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                      }}>
                        ✕
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Issues Identified (&lt;3.5)</h6>
                      <small className="text-secondary">
                        Serious concerns identified. Children may not be safe. We are taking immediate action.
                      </small>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Assessment Criteria */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-5 text-center">What We Assess</h2>
              
              <Row className="g-4">
                <Col md={6}>
                  <h6 className="fw-bold mb-3">🏠 Physical Environment</h6>
                  <ul className="text-secondary" style={{ fontSize: '0.95rem' }}>
                    <li>Safe, clean living spaces</li>
                    <li>Adequate bedding and sanitation</li>
                    <li>Proper ventilation and lighting</li>
                    <li>Security and access control</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6 className="fw-bold mb-3">👥 Staffing & Care</h6>
                  <ul className="text-secondary" style={{ fontSize: '0.95rem' }}>
                    <li>Adequate staff-to-child ratio</li>
                    <li>Proper background checks</li>
                    <li>Regular training and oversight</li>
                    <li>Medical and emotional support</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6 className="fw-bold mb-3">📚 Education & Development</h6>
                  <ul className="text-secondary" style={{ fontSize: '0.95rem' }}>
                    <li>Access to formal education</li>
                    <li>Skill development programs</li>
                    <li>Counseling and mental health</li>
                    <li>Recreation and activities</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <h6 className="fw-bold mb-3">🛡️ Child Protection</h6>
                  <ul className="text-secondary" style={{ fontSize: '0.95rem' }}>
                    <li>Protection from abuse/exploitation</li>
                    <li>Clear complaint procedures</li>
                    <li>Child rights awareness</li>
                    <li>Legal documentation</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-6 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2 text-center">
              <h2 className="fw-bold mb-4">See Something Concerning?</h2>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
                If you notice signs of abuse, neglect, or poor conditions at any orphanage, file a complaint immediately. Our team will investigate and take protective action.
              </p>
              <Button 
                href="/file-complaint" 
                variant="warning" 
                size="lg" 
                className="fw-bold px-5 py-3"
              >
                File a Complaint Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Orphanages;
