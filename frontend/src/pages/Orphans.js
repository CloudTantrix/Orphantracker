import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Spinner, Alert } from 'react-bootstrap';
import api from '../services/api';
import '../styles/Orphans.css';

function Orphans() {
  const [orphans, setOrphans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrphans = async () => {
      try {
        setLoading(true);
        // const response = await api.get('/orphans');
        // setOrphans(response.data);
        // Mock data for now
        setOrphans([
          { id: 1, name: 'John Doe', age: 12, status: 'Active' },
          { id: 2, name: 'Jane Smith', age: 14, status: 'Active' },
          { id: 3, name: 'Mike Johnson', age: 11, status: 'Inactive' },
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrphans();
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
        <Alert variant="danger">Error loading orphans: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Orphans List</h2>
        <Button variant="primary">Add New Orphan</Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orphans.map((orphan) => (
            <tr key={orphan.id}>
              <td>{orphan.id}</td>
              <td>{orphan.name}</td>
              <td>{orphan.age}</td>
              <td>
                <span className={`badge bg-${orphan.status === 'Active' ? 'success' : 'secondary'}`}>
                  {orphan.status}
                </span>
              </td>
              <td>
                <Button variant="sm" className="me-2">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Orphans;
