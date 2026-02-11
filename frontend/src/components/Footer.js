import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="footer bg-dark text-white mt-5">
      {/* Newsletter Section */}
      <section className="newsletter-section bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h4 className="h5 fw-bold mb-2">Subscribe to Our Newsletter</h4>
              <p className="text-white-50 mb-0">
                Get updates on our latest impact and how you can help
              </p>
            </Col>
            <Col lg={6}>
              <Form onSubmit={handleNewsletterSubmit} className="d-flex gap-2">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow-1"
                  required
                />
                <Button variant="light" type="submit" className="text-primary fw-bold">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Footer */}
      <div className="footer-main py-5">
        <Container>
          <Row className="g-4 mb-5">
            {/* About Section */}
            <Col md={6} lg={3}>
              <h5 className="fw-bold mb-4">Orphan Tracker</h5>
              <p className="text-white-50 small mb-4">
                Breaking the cycle of abandonment, one child at a time through comprehensive 
                support and care.
              </p>
              <div className="social-links">
                <a href="#facebook" className="text-white-50 me-3 text-decoration-none">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="#twitter" className="text-white-50 me-3 text-decoration-none">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#instagram" className="text-white-50 text-decoration-none">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </Col>

            {/* Quick Links */}
            <Col md={6} lg={2}>
              <h6 className="fw-bold mb-4">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white-50 text-decoration-none">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="text-white-50 text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services" className="text-white-50 text-decoration-none">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/impact" className="text-white-50 text-decoration-none">
                    Impact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/get-involved" className="text-white-50 text-decoration-none">
                    Get Involved
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Support Links */}
            <Col md={6} lg={2}>
              <h6 className="fw-bold mb-4">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/donate" className="text-white-50 text-decoration-none">
                    Donate
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/get-involved" className="text-white-50 text-decoration-none">
                    Volunteer
                  </Link>
                </li>
                <li className="mb-2">
                  <a href="#faq" className="text-white-50 text-decoration-none">
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-white-50 text-decoration-none">
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col md={6} lg={3}>
              <h6 className="fw-bold mb-4">Contact Info</h6>
              <p className="text-white-50 small mb-2">
                📞 +1 (234) 567-8900
              </p>
              <p className="text-white-50 small mb-2">
                📧 info@orphantracker.org
              </p>
              <p className="text-white-50 small mb-0">
                📍 123 Care Street<br />
                Hope City, ST 12345
              </p>
            </Col>
          </Row>

          {/* Divider */}
          <hr className="bg-white-50" />

          {/* Bottom Footer */}
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <p className="text-white-50 small mb-0">
                © 2026 Orphan Tracker. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <a href="#privacy" className="text-white-50 small text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white-50 small text-decoration-none me-3">
                Terms of Service
              </a>
              <a href="#accessibility" className="text-white-50 small text-decoration-none">
                Accessibility
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Donation CTA Bar */}
      <div className="donation-bar bg-danger text-white py-3">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <p className="mb-0 fw-bold">
                Every dollar makes a difference. Help us change lives today.
              </p>
            </Col>
            <Col md={4} className="text-md-end mt-3 mt-md-0">
              <Link to="/donate" className="text-decoration-none">
                <Button variant="light" size="sm" className="text-danger fw-bold">
                  💝 Donate Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
