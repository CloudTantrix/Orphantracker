import React from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero bg-light py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead text-muted">
                We'd love to hear from you. Get in touch with us today.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <Container>
          <Row className="g-4 mb-5">
            <Col md={6} lg={4}>
              <Card className="contact-card shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <div className="mb-3" style={{ fontSize: '2rem' }}>📞</div>
                  <Card.Title className="fw-bold">Phone</Card.Title>
                  <Card.Text className="text-muted">
                    <a href="tel:+1234567890" className="text-decoration-none">
                      +1 (234) 567-8900
                    </a>
                  </Card.Text>
                  <small className="text-muted d-block\">Monday - Friday, 9AM - 5PM</small>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="contact-card shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <div className="mb-3" style={{ fontSize: '2rem' }}>📧</div>
                  <Card.Title className="fw-bold\">Email</Card.Title>
                  <Card.Text className="text-muted">
                    <a href="mailto:info@orphantracker.org" className="text-decoration-none">
                      info@orphantracker.org
                    </a>
                  </Card.Text>
                  <small className="text-muted d-block\">We respond within 24 hours</small>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="contact-card shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <div className="mb-3" style={{ fontSize: '2rem' }}>📍</div>
                  <Card.Title className="fw-bold">Location</Card.Title>
                  <Card.Text className="text-muted">
                    123 Care Street<br />
                    Hope City, ST 12345
                  </Card.Text>
                  <small className="text-muted d-block">Visit us by appointment</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="h2 fw-bold mb-4 text-center">Send us a Message</h2>
              <div className="bg-white p-5 rounded shadow-sm">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control type="text" placeholder="Your name" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" placeholder="your@email.com" required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="(555) 123-4567" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Select required>
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="partnership">Corporate Partnership</option>
                      <option value="report">Report an Issue</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Your message here..." 
                      required 
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Office Hours */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="h2 fw-bold mb-4 text-center">Office Hours</h2>
              <div className="office-hours text-center">
                <p className="lead mb-3"><strong>Monday - Friday</strong></p>
                <p className="text-muted mb-4">9:00 AM - 5:00 PM</p>
                
                <p className="lead mb-3"><strong>Saturday</strong></p>
                <p className="text-muted mb-4">10:00 AM - 2:00 PM</p>
                
                <p className="lead mb-3"><strong>Sunday</strong></p>
                <p className="text-muted mb-4">Closed</p>
                
                <p className="text-muted mt-4\">\n                  <strong>Emergency Support:</strong> Available 24/7 for urgent matters\n                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
