import "./Css/Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../api/Api";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate(); // Use useNavigate for React Router v6

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);
      setIsLoading(true);
      const token = await handleLogin(email, password);

      console.log("Login successful!");
      setLoginSuccess(true);

      // Redirect to the Home page after successful login
      navigate("/home"); // Use navigate to navigate to the desired page
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          {loginSuccess && <Alert variant="success">Login successful!</Alert>}
          <Form className="mt-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              onClick={handleSubmit}
              disabled={isLoading} // Disable the button while loading
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
