import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import api from '../services/api';
import '../styles/Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        // const response = await api.get('/stats');
        // setStats(response.data);
        // Mock data for now
        setStats({
          totalOrphans: 150,
          totalGuardians: 45,
          activeUsers: 23,
          pendingReports: 8,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">Error loading dashboard: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Dashboard</h2>
      <Row className="g-4">
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Orphans</Card.Title>
              <h3 className="text-primary">{stats?.totalOrphans}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Guardians</Card.Title>
              <h3 className="text-success">{stats?.totalGuardians}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Active Users</Card.Title>
              <h3 className="text-info">{stats?.activeUsers}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Pending Reports</Card.Title>
              <h3 className="text-warning">{stats?.pendingReports}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
