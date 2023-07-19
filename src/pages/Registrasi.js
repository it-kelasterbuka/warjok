import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <Form className="mt-4">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
