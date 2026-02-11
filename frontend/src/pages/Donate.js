import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import '../styles/Donate.css';

function Donate() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState('once');

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero bg-primary text-white py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">Make a Donation</h1>
              <p className="lead mb-0">
                Your generous contribution directly supports a child's journey toward hope and healing.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Donation Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="offset-lg-2">
              <Card className="shadow-sm border-0">
                <Card.Body className="p-5">
                  <h2 className="h3 fw-bold mb-4">Your Generous Gift</h2>

                  {/* Donation Type */}
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold mb-3\">Donation Type</Form.Label>
                    <div className="d-flex gap-3">
                      <Form.Check
                        type="radio"
                        id="once"
                        name="donationType"
                        label="One-Time Donation"
                        value="once"
                        checked={donationType === 'once'}
                        onChange={(e) => setDonationType(e.target.value)}
                      />
                      <Form.Check
                        type="radio"
                        id="monthly"
                        name="donationType"
                        label="Monthly Giving"
                        value="monthly"
                        checked={donationType === 'monthly'}
                        onChange={(e) => setDonationType(e.target.value)}
                      />
                    </div>
                  </Form.Group>

                  {/* Amount Selection */}
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold mb-3">Select Amount</Form.Label>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {presetAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount ? 'primary' : 'outline-primary'}
                          className="flex-grow-1"
                          onClick={() => setDonationAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <Form.Control
                      type="number"
                      placeholder="Or enter custom amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      min="1"
                      className="mt-3"
                    />
                  </Form.Group>

                  {/* Impact Messaging */}
                  <div className="bg-light p-4 rounded mb-4\">
                    <h5 className="fw-bold mb-3\">Your Impact</h5>
                    {donationAmount >= 10 && (
                      <p className="text-muted mb-2\">
                        💝 ${donationAmount} provides essential supplies for one child
                      </p>
                    )}
                    {donationAmount >= 50 && (
                      <p className="text-muted mb-2\">
                        🎓 ${donationAmount} funds tutoring sessions
                      </p>
                    )}
                    {donationAmount >= 100 && (
                      <p className="text-muted mb-2\">
                        🏥 ${donationAmount} covers medical checkup and care
                      </p>
                    )}
                    {donationAmount >= 250 && (
                      <p className="text-muted mb-2\">
                        📚 ${donationAmount} sponsors a child's education for a month
                      </p>
                    )}
                    {donationAmount >= 500 && (
                      <p className="text-muted mb-0\">
                        🌟 ${donationAmount} fully supports a child's monthly comprehensive care
                      </p>
                    )}
                  </div>

                  {/* Donor Information */}
                  <h5 className=\"fw-bold mb-3 mt-4\">Donor Information</h5>

                  <Form.Group className=\"mb-3\">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control type=\"text\" placeholder=\"Your name\" required />
                  </Form.Group>

                  <Form.Group className=\"mb-3\">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type=\"email\" placeholder=\"your@email.com\" required />
                  </Form.Group>

                  <Form.Group className=\"mb-3\">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type=\"tel\" placeholder=\"(555) 123-4567\" />
                  </Form.Group>

                  {/* Payment Information */}
                  <h5 className=\"fw-bold mb-3 mt-4\">Payment Information</h5>

                  <Form.Group className=\"mb-3\">
                    <Form.Label>Card Number *</Form.Label>
                    <Form.Control 
                      type=\"text\" 
                      placeholder=\"1234 5678 9012 3456\" 
                      required 
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className=\"mb-3\">
                        <Form.Label>Expiry Date *</Form.Label>
                        <Form.Control 
                          type=\"text\" 
                          placeholder=\"MM/YY\" 
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className=\"mb-3\">
                        <Form.Label>CVV *</Form.Label>
                        <Form.Control 
                          type=\"text\" 
                          placeholder=\"123\" 
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Donation Options */}
                  <Form.Check className=\"mb-3\" type=\"checkbox\">
                    <Form.Check.Input />
                    <Form.Check.Label>
                      Make this donation anonymous
                    </Form.Check.Label>
                  </Form.Check>

                  <Form.Check className=\"mb-4\" type=\"checkbox\">
                    <Form.Check.Input defaultChecked />
                    <Form.Check.Label>
                      I'd like to receive updates about my impact
                    </Form.Check.Label>
                  </Form.Check>

                  {/* Donate Button */}
                  <Button variant=\"primary\" size=\"lg\" className=\"w-100 fw-bold\">
                    Donate ${donationAmount} {donationType === 'monthly' ? '/ Month' : ''}
                  </Button>

                  <p className=\"text-muted text-center mt-3 small\">
                    Your donation is secure and encrypted. We never share your information.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Other Ways to Give */}
      <section className=\"py-5 bg-light\">
        <Container>
          <Row className=\"mb-5\">
            <Col lg={12} className=\"text-center\">
              <h2 className=\"h2 fw-bold mb-5\">Other Ways to Give</h2>
            </Col>
          </Row>
          <Row className=\"g-4\">
            <Col md={6} lg={3}>
              <Card className=\"shadow-sm border-0 text-center p-4 h-100\">
                <div style={{ fontSize: '2rem' }} className=\"mb-3\">🏦</div>
                <Card.Title className=\"fw-bold\">Bank Transfer</Card.Title>
                <Card.Text className=\"text-muted\">
                  Direct bank transfers for larger donations
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className=\"shadow-sm border-0 text-center p-4 h-100\">
                <div style={{ fontSize: '2rem' }} className=\"mb-3\">📱</div>
                <Card.Title className=\"fw-bold\">Mobile Payment</Card.Title>
                <Card.Text className=\"text-muted\">
                  PayPal, Apple Pay, Google Pay
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className=\"shadow-sm border-0 text-center p-4 h-100\">
                <div style={{ fontSize: '2rem' }} className=\"mb-3\">📦</div>
                <Card.Title className=\"fw-bold\">In-Kind Gifts</Card.Title>
                <Card.Text className=\"text-muted\">
                  Donate supplies and goods
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className=\"shadow-sm border-0 text-center p-4 h-100\">
                <div style={{ fontSize: '2rem' }} className=\"mb-3\">💝</div>
                <Card.Title className=\"fw-bold\">Stock Donation</Card.Title>
                <Card.Text className=\"text-muted\">
                  Tax-advantaged giving
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className=\"py-5\">
        <Container>
          <Row className=\"mb-5\">
            <Col lg={8} className=\"offset-lg-2\">
              <h2 className=\"h2 fw-bold mb-5 text-center\">Frequently Asked Questions</h2>
              
              <div className=\"faq-item mb-4 pb-4 border-bottom\">
                <h5 className=\"fw-bold mb-3\">Is my donation tax-deductible?</h5>
                <p className=\"text-muted mb-0\">
                  Yes! Orphan Tracker is a registered 501(c)(3) nonprofit organization. 
                  All donations are tax-deductible to the extent allowed by law.
                </p>
              </div>

              <div className=\"faq-item mb-4 pb-4 border-bottom\">
                <h5 className=\"fw-bold mb-3\">How is my donation used?</h5>
                <p className=\"text-muted mb-0\">
                  100% of your donation supports our programs. Administrative costs are covered 
                  by grants and board-level giving. View our annual report for detailed breakdown.
                </p>
              </div>

              <div className=\"faq-item mb-4 pb-4 border-bottom\">
                <h5 className=\"fw-bold mb-3\">Can I cancel my monthly donation?</h5>
                <p className=\"text-muted mb-0\">
                  Yes, you can cancel anytime with no penalties. Simply contact us or manage 
                  your subscription in your account dashboard.
                </p>
              </div>

              <div className=\"faq-item\">
                <h5 className=\"fw-bold mb-3\">Is my payment information secure?</h5>
                <p className=\"text-muted mb-0\">
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
