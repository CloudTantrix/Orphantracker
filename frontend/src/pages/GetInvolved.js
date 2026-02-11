import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/GetInvolved.css';

function GetInvolved() {
  return (
    <div className="get-involved-page">
      {/* Hero Section */}
      <section className="involved-hero bg-light py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Get Involved</h1>
              <p className="lead text-muted">
                There are many ways you can support our mission
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '3rem' }}>💝</div>
                  <Card.Title className="h5 fw-bold">Donate</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Make a financial contribution to support our programs and services.
                  </Card.Text>
                  <ul className="small text-muted">
                    <li>One-time donations</li>
                    <li>Monthly giving</li>
                    <li>Donor sponsorships</li>
                  </ul>
                  <Link to="/donate" className="mt-3 d-inline-block">
                    <Button variant="primary" size="sm">Donate Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🙋</div>
                  <Card.Title className="h5 fw-bold">Volunteer</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Share your skills and time with the children we serve.
                  </Card.Text>
                  <ul className="small text-muted">
                    <li>Mentoring & tutoring</li>
                    <li>Event support</li>
                    <li>Administrative help</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🤝</div>
                  <Card.Title className="h5 fw-bold">Corporate Partnership</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Align your business with our mission through partnership.
                  </Card.Text>
                  <ul className="small text-muted">
                    <li>Sponsorships</li>
                    <li>In-kind donations</li>
                    <li>Employee matching</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Partner With Us</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '3rem' }}>📢</div>
                  <Card.Title className="h5 fw-bold">Spread Awareness</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Help us raise awareness about child welfare issues.
                  </Card.Text>
                  <ul className="small text-muted">
                    <li>Share our mission</li>
                    <li>Attend events</li>
                    <li>Follow our social media</li>\n                  </ul>\n                  <Button variant="outline-primary" size="sm">Share Now</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🎓</div>
                  <Card.Title className="h5 fw-bold">Sponsor a Child</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Provide direct support to a specific child's education.
                  </Card.Text>
                  <ul className="small text-muted">
                    <li>Annual commitment</li>
                    <li>Regular updates</li>
                    <li>Pen pal program</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4}>
              <Card className="involvement-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3" style={{ fontSize: '3rem' }}>📧</div>
                  <Card.Title className="h5 fw-bold">Subscribe to Updates</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    Stay informed about our latest news and impact.
                  </Card.Text>
                  <ul className="small text-muted">
                    <li>Monthly newsletter</li>
                    <li>Event invitations</li>
                    <li>Impact reports</li>
                  </ul>
                  <Button variant="outline-primary" size="sm">Subscribe</Button>
                </Card.Body>\n              </Card>\n            </Col>\n          </Row>\n        </Container>\n      </section>\n\n      {/* Volunteer Form */}\n      <section className=\"py-5 bg-light\">\n        <Container>\n          <Row className=\"mb-5\">\n            <Col lg={8} className=\"offset-lg-2\">\n              <h2 className=\"h2 fw-bold mb-4 text-center\">Become a Volunteer</h2>\n              <div className=\"bg-white p-5 rounded shadow-sm\">\n                <form>\n                  <div className=\"mb-3\">\n                    <label className=\"form-label\">Full Name *</label>\n                    <input type=\"text\" className=\"form-control\" required />\n                  </div>\n                  <div className=\"mb-3\">\n                    <label className=\"form-label\">Email *</label>\n                    <input type=\"email\" className=\"form-control\" required />\n                  </div>\n                  <div className=\"mb-3\">\n                    <label className=\"form-label\">Phone Number</label>\n                    <input type=\"tel\" className=\"form-control\" />\n                  </div>\n                  <div className=\"mb-3\">\n                    <label className=\"form-label\">Areas of Interest *</label>\n                    <div className=\"form-check\">\n                      <input className=\"form-check-input\" type=\"checkbox\" id=\"tutoring\" />\n                      <label className=\"form-check-label\" htmlFor=\"tutoring\">\n                        Tutoring & Academic Support\n                      </label>\n                    </div>\n                    <div className=\"form-check\">\n                      <input className=\"form-check-input\" type=\"checkbox\" id=\"mentoring\" />\n                      <label className=\"form-check-label\" htmlFor=\"mentoring\">\n                        Mentoring\n                      </label>\n                    </div>\n                    <div className=\"form-check\">\n                      <input className=\"form-check-input\" type=\"checkbox\" id=\"admin\" />\n                      <label className=\"form-check-label\" htmlFor=\"admin\">\n                        Administrative Support\n                      </label>\n                    </div>\n                  </div>\n                  <Button variant=\"primary\" size=\"lg\" className=\"w-100\" type=\"submit\">\n                    Submit Application\n                  </Button>\n                </form>\n              </div>\n            </Col>\n          </Row>\n        </Container>\n      </section>\n    </div>\n  );\n}\n\nexport default GetInvolved;
