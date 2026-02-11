import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NotFound() {
  return (
    <Container>
      <Row className="align-items-center min-vh-100">
        <Col className="text-center">
          <h1 className="display-1">404</h1>
          <p className="fs-3">
            <span className="text-danger">Oops!</span> Page not found.
          </p>
          <p className="lead">The page you are looking for does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
