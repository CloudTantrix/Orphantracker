import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import Button from '../components/ui/Button';
import '../styles/Donate.css';

function FileComplaint() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    location: '',
    orphanageName: '',
    concernType: '',
    description: '',
    evidence: '',
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    confidential: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reporting. Your complaint has been submitted securely. We will investigate immediately and take action to protect the child.');
    setFormData({
      childName: '',
      childAge: '',
      location: '',
      orphanageName: '',
      concernType: '',
      description: '',
      evidence: '',
      yourName: '',
      yourEmail: '',
      yourPhone: '',
      confidential: true
    });
  };

  return (
    <div className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero text-white py-6">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-4">File a Complaint</h1>
              <p className="lead mb-0" style={{ fontSize: '1.25rem' }}>
                Report child welfare concerns directly. Your information helps us protect vulnerable children across Nepal.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold text-center mb-5">Why File a Complaint?</h2>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div style={{ fontSize: '2.5rem' }} className="mb-3">🛡️</div>
                      <h5 className="fw-bold">Protect Children</h5>
                      <p className="text-secondary">Your report can save a child from abuse or neglect</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div style={{ fontSize: '2.5rem' }} className="mb-3">🔒</div>
                      <h5 className="fw-bold">Confidentiality Protected</h5>
                      <p className="text-secondary">Your identity is protected and kept confidential</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div style={{ fontSize: '2.5rem' }} className="mb-3">⚡</div>
                      <h5 className="fw-bold">Swift Action</h5>
                      <p className="text-secondary">We investigate immediately and take protective action</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="text-center">
                      <div style={{ fontSize: '2.5rem' }} className="mb-3">📊</div>
                      <h5 className="fw-bold">Build Accountability</h5>
                      <p className="text-secondary">Complaints help us track and improve orphanage standards</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Complaint Form */}
      <section className="py-6">
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="offset-lg-1">
              <h2 className="fw-bold text-center mb-5">Report a Child Welfare Concern</h2>
              
                  <Card className="donation-form-card glass">
                <Card.Body className="p-5">
                  <Form onSubmit={handleSubmit}>
                    {/* About the Child */}
                    <div className="mb-5 pb-4 border-bottom">
                      <h5 className="fw-bold mb-4">About the Child</h5>
                      
                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Child's Name (if known)</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="childName"
                          placeholder="Leave blank if anonymous"
                          value={formData.childName}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Approximate Age</Form.Label>
                        <Form.Control 
                          type="number" 
                          name="childAge"
                          placeholder="Age in years"
                          value={formData.childAge}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Location/District in Nepal</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="location"
                          placeholder="e.g., Kathmandu, Pokhara, Janakpur"
                          value={formData.location}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="fw-bold">Orphanage/Facility Name (if applicable)</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="orphanageName"
                          placeholder="Name of the facility"
                          value={formData.orphanageName}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </div>

                    {/* Concern Details */}
                    <div className="mb-5 pb-4 border-bottom">
                      <h5 className="fw-bold mb-4">Concern Details</h5>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Type of Concern</Form.Label>
                        <Form.Select 
                          name="concernType"
                          value={formData.concernType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a concern type...</option>
                          <option value="abuse">Physical/Emotional Abuse</option>
                          <option value="neglect">Neglect</option>
                          <option value="unsafe">Unsafe Living Conditions</option>
                          <option value="exploitation">Exploitation/Child Labor</option>
                          <option value="trafficking">Suspected Trafficking</option>
                          <option value="nutrition">Poor Nutrition/Health</option>
                          <option value="education">Denied Education</option>
                          <option value="financial">Financial Mismanagement</option>
                          <option value="other">Other Concern</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Detailed Description of Concern</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={5}
                          name="description"
                          placeholder="Please provide detailed information about what you witnessed or know about. Include dates, times, and specific incidents if possible."
                          value={formData.description}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="fw-bold">Evidence or Supporting Information</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={3}
                          name="evidence"
                          placeholder="Names of witnesses, medical reports, photos, videos, or any documentation you can provide"
                          value={formData.evidence}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </div>

                    {/* Your Information */}
                    <div className="mb-5 pb-4 border-bottom">
                      <h5 className="fw-bold mb-4">Your Information (Optional)</h5>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="yourName"
                          placeholder="Leave blank for anonymous report"
                          value={formData.yourName}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Your Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="yourEmail"
                          placeholder="For us to contact you with updates"
                          value={formData.yourEmail}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-bold">Your Phone Number</Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="yourPhone"
                          placeholder="Optional contact number"
                          value={formData.yourPhone}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Check 
                        type="checkbox" 
                        id="confidential"
                        name="confidential"
                        label="Keep my report confidential (recommended)"
                        checked={formData.confidential}
                        onChange={handleChange}
                        className="fs-5"
                      />
                    </div>

                    {/* Submit */}
                    <div className="text-center">
                      <Button 
                        type="submit"
                        className="px-5 py-3 fw-bold"
                        variant="primary"
                        size="lg"
                      >
                        Submit Complaint
                      </Button>
                      <p className="text-secondary mt-4 mb-0">
                        <small>Your report is secure, confidential, and will be investigated immediately.</small>
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="offset-lg-2">
              <h2 className="fw-bold mb-5 text-center">Frequently Asked Questions</h2>
              
              <div className="faq-item">
                <h5 className="fw-bold">Will my identity be protected?</h5>
                <p className="text-secondary">
                  Yes. You can file an anonymous report. We take confidentiality seriously and protect reporter identities to the fullest extent possible.
                </p>
              </div>

              <div className="faq-item">
                <h5 className="fw-bold">What happens after I file a complaint?</h5>
                <p className="text-secondary">
                  Our team will investigate your report promptly. If you provide contact information, we may follow up with you for additional details. All cases involving child safety receive immediate attention.
                </p>
              </div>

              <div className="faq-item">
                <h5 className="fw-bold">What if I don't have all the details?</h5>
                <p className="text-secondary">
                  Provide whatever information you have. Even partial information helps us identify and protect at-risk children. Our team can investigate and gather additional details.
                </p>
              </div>

              <div className="faq-item">
                <h5 className="fw-bold">Can I report someone outside an orphanage?</h5>
                <p className="text-secondary">
                  Yes. We track all vulnerable children across Nepal, not just those in orphanages. You can report concerns about children on the streets, in exploitative situations, or at risk anywhere.
                </p>
              </div>

              <div className="faq-item">
                <h5 className="fw-bold">Is there a time limit for reporting?</h5>
                <p className="text-secondary">
                  No. You can report concerns at any time, whether they happened recently or in the past. All reports of child abuse or exploitation are important.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default FileComplaint;
