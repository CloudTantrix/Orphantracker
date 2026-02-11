import React from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import '../styles/GetInvolved.css';

function GetInvolved() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="get-involved-hero bg-primary text-white py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Get Involved</h1>
              <p className="lead mb-0">
                Make a difference in the lives of vulnerable children today.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-5">
        <Container>
          <Row className="g-4 mb-5">
            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>💝</div>
                  <Card.Title className="fw-bold">Donate</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Every donation directly supports children in need. Choose one-time or monthly giving.
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Donate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>🤝</div>
                  <Card.Title className="fw-bold">Volunteer</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Share your skills and time. We need mentors, tutors, and community advocates.
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>🏢</div>
                  <Card.Title className="fw-bold">Partner</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Businesses can sponsor programs or provide in-kind donations to support our mission.
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Explore Partnerships
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📢</div>
                  <Card.Title className="fw-bold">Advocate</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Help us raise awareness. Share our mission with your networks and community.
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Get Resources
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>📚</div>
                  <Card.Title className="fw-bold">Educate</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Host awareness sessions or workshops in your community about orphan care.
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Host Workshop
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>🎯</div>
                  <Card.Title className="fw-bold">Advocate for Policy</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Join our policy team to advocate for better child protection laws.
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Join the Team
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="h2 fw-bold mb-5 text-center">Volunteer Application</h2>
              
              <Card className="shadow-lg border-0">
                <Card.Body className="p-5">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Your Name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="your@email.com"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Phone Number</Form.Label>
                      <Form.Control 
                        type="tel" 
                        placeholder="(555) 000-0000"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Areas of Interest</Form.Label>
                      <Form.Check 
                        type="checkbox" 
                        id="mentoring"
                        label="Mentoring"
                        className="mb-2"
                      />
                      <Form.Check 
                        type="checkbox" 
                        id="tutoring"
                        label="Tutoring"
                        className="mb-2"
                      />
                      <Form.Check 
                        type="checkbox" 
                        id="events"
                        label="Event Organization"
                        className="mb-2"
                      />
                      <Form.Check 
                        type="checkbox" 
                        id="outreach"
                        label="Community Outreach"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Tell us about yourself</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4}
                        placeholder="Share your background and why you want to volunteer"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label className="fw-bold">Availability</Form.Label>
                      <Form.Select required>
                        <option value="">Select availability...</option>
                        <option value="weekends">Weekends</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="flexible">Flexible</option>
                      </Form.Select>
                    </Form.Group>

                    <Button 
                      variant="primary" 
                      size="lg" 
                      type="submit"
                      className="w-100 fw-bold"
                    >
                      Submit Application
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Stories */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-5">Volunteer Impact Stories</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <h5 className="fw-bold mb-3">"Life-Changing Experience"</h5>
                  <p className="text-muted mb-3">
                    "Volunteering as a tutor has been incredibly rewarding. Seeing my students' progress gives me purpose."
                  </p>
                  <p className="fw-bold mb-0">- Sarah, Tutor</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <h5 className="fw-bold mb-3">"Making a Real Difference"</h5>
                  <p className="text-muted mb-3">
                    "As a mentor, I've built lasting friendships with the children. It's about mutual growth."
                  </p>
                  <p className="fw-bold mb-0">- James, Mentor</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <h5 className="fw-bold mb-3">"Community Building"</h5>
                  <p className="text-muted mb-3">
                    "Organizing events has helped me connect with like-minded people passionate about children's welfare."
                  </p>
                  <p className="fw-bold mb-0">- Maria, Event Organizer</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="h2 fw-bold mb-4">Ready to Make a Difference?</h2>
          <p className="lead mb-4">
            Join our community of passionate supporters today!
          </p>
          <Button variant="light" size="lg" className="fw-bold">
            Get Started Now
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default GetInvolved;
