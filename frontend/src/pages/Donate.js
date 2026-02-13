import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import Button from '../components/ui/Button';
import '../styles/Donate.css';

function Donate() {

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero text-white py-6" style={{ background: 'linear-gradient(135deg, #B31217 0%, #FF8C00 100%)' }}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Donate to Protect Nepal's Children</h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem' }}>
                Your donation directly protects vulnerable children, monitors orphanages, and enables citizens to report abuse. Every rupee counts.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Impact Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="fw-bold mb-5 h3">Your Donation in Action</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="shadow-sm border-0 text-center p-4 glass">
                <div style={{ fontSize: '2.5rem' }} className="mb-3">📋</div>
                <h5 className="fw-bold">$30 NPR 4,000</h5>
                <p className="text-secondary mb-0">Completes a full child welfare assessment in one orphanage</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0 text-center p-4">
                <div style={{ fontSize: '2.5rem' }} className="mb-3">🚨</div>
                <h5 className="fw-bold">$75 NPR 10,000</h5>
                <p className="text-secondary mb-0">Funds investigation and protective response for one complaint</p>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="shadow-sm border-0 text-center p-4">
                <div style={{ fontSize: '2.5rem' }} className="mb-3">📚</div>
                <h5 className="fw-bold">$150 NPR 20,000</h5>
                <p className="text-secondary mb-0">One year of education support for a child aging out of care</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation Form */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <Card className="shadow-lg border-0 glass donation-form-card">
                <Card.Body className="p-5">
                  <h3 className="fw-bold mb-4">Make Your Donation</h3>
                  
                  {/* Donation Type Selection */}
                  <div className="mb-4">
                    <label className="fw-bold mb-3 d-block">Donation Type</label>
                    <div className="btn-group w-100" role="group">
                      <input 
                        type="radio" 
                        className="btn-check" 
                        name="donationType" 
                        id="oneTime" 
                        defaultChecked
                      />
                      <label className="btn btn-outline-primary" htmlFor="oneTime">
                        One-Time
                      </label>
                      
                      <input 
                        type="radio" 
                        className="btn-check" 
                        name="donationType" 
                        id="monthly"
                      />
                      <label className="btn btn-outline-primary" htmlFor="monthly">
                        Monthly
                      </label>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-4">
                    <label className="fw-bold mb-3 d-block">Select Amount</label>
                    <Row className="g-2">
                      {[25, 50, 100, 250, 500, 1000].map((amount) => (
                        <Col xs={6} sm={4} lg={2} key={amount}>
                          <Button 
                            className="w-100 btn-outline-secondary"
                          >
                            ${amount}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                    <div className="mt-3">
                      <Form.Control 
                        type="number" 
                        placeholder="Enter custom amount" 
                        min="1"
                        className="text-center"
                      />
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-4 pb-4 border-bottom">
                    <label className="fw-bold mb-3 d-block">Your Information</label>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="John Doe"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="john@example.com"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Phone Number (Optional)</Form.Label>
                      <Form.Control 
                        type="tel" 
                        placeholder="(555) 000-0000"
                      />
                    </Form.Group>
                  </div>

                  {/* Payment Method */}
                  <div className="mb-4">
                    <label className="fw-bold mb-3 d-block">Payment Method</label>
                    <Row className="g-3">
                      <Col md={6}>
                        <input 
                          type="radio" 
                          className="btn-check" 
                          name="payment" 
                          id="credit"
                          defaultChecked
                        />
                        <label className="btn btn-outline-primary w-100" htmlFor="credit">
                          💳 Credit Card
                        </label>
                      </Col>
                      <Col md={6}>
                        <input 
                          type="radio" 
                          className="btn-check" 
                          name="payment" 
                          id="paypal"
                        />
                        <label className="btn btn-outline-primary w-100" htmlFor="paypal">
                          🅿️ PayPal
                        </label>
                      </Col>
                    </Row>
                  </div>

                  {/* Recurring Donation */}
                  <div className="mb-4 pb-4 border-bottom">
                    <Form.Check 
                      type="checkbox" 
                      id="recurring"
                      label="I would like this donation to recur monthly"
                      className="fs-5"
                    />
                  </div>

                  {/* Donation Dedication */}
                  <div className="mb-4">
                    <Form.Check 
                      type="checkbox" 
                      id="dedication"
                      label="This donation is in memory of / in honor of someone"
                      className="fs-5"
                    />
                    <Form.Control 
                      type="text" 
                      placeholder="Name (optional)" 
                      className="mt-3"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    className="w-100 fw-bold py-3"
                    variant="primary"
                    size="lg"
                  >
                    Proceed to Payment →
                  </Button>

                  <p className="text-center text-muted mt-4 mb-0">
                    ✓ 100% secure • Encrypted payment • Tax-deductible
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Other Ways to Give */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="h2 fw-bold mb-5">Other Ways to Give</h2>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                <div style={{ fontSize: '2rem' }} className="mb-3">🏦</div>
                <Card.Title className="fw-bold">Bank Transfer</Card.Title>
                <Card.Text className="text-muted">
                  Direct bank transfers for larger donations
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                <div style={{ fontSize: '2rem' }} className="mb-3">📱</div>
                <Card.Title className="fw-bold">Mobile Payment</Card.Title>
                <Card.Text className="text-muted">
                  PayPal, Apple Pay, Google Pay
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                <div style={{ fontSize: '2rem' }} className="mb-3">📦</div>
                <Card.Title className="fw-bold">In-Kind Gifts</Card.Title>
                <Card.Text className="text-muted">
                  Donate supplies and goods
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="shadow-sm border-0 text-center p-4 h-100">
                <div style={{ fontSize: '2rem' }} className="mb-3">💝</div>
                <Card.Title className="fw-bold">Stock Donation</Card.Title>
                <Card.Text className="text-muted">
                  Tax-advantaged giving
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="h2 fw-bold mb-5 text-center">Frequently Asked Questions</h2>
              
              <div className="faq-item mb-4 pb-4 border-bottom">
                <h5 className="fw-bold mb-3">Is my donation tax-deductible?</h5>
                <p className="text-muted mb-0">
                  Yes! Orphan Tracker is a registered 501(c)(3) nonprofit organization. 
                  All donations are tax-deductible to the extent allowed by law.
                </p>
              </div>

              <div className="faq-item mb-4 pb-4 border-bottom">
                <h5 className="fw-bold mb-3">How is my donation used?</h5>
                <p className="text-muted mb-0">
                  100% of your donation supports our programs. Administrative costs are covered 
                  by grants and board-level giving. View our annual report for detailed breakdown.
                </p>
              </div>

              <div className="faq-item mb-4 pb-4 border-bottom">
                <h5 className="fw-bold mb-3">Can I cancel my monthly donation?</h5>
                <p className="text-muted mb-0">
                  Yes, you can cancel anytime with no penalties. Simply contact us or manage 
                  your subscription in your account dashboard.
                </p>
              </div>

              <div className="faq-item">
                <h5 className="fw-bold mb-3">Is my payment information secure?</h5>
                <p className="text-muted mb-0">
                  Your payment information is encrypted using industry-standard SSL technology. 
                  We never store your credit card information on our servers.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Donate;
