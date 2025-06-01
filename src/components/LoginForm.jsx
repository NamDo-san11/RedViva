import React from "react";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/LoginForm.css";

const LoginForm = ({ email, password, error, setEmail, setPassword, handleSubmit }) => {
  return (
    <Row className="w-100 justify-content-center">
      <Col md={6} lg={5} xl={4}>
        <Card className="p-4 shadow-lg login-card">
          <Card.Body>
            <h3 className="text-center mb-4">Iniciar Sesión</h3>
            {error && <Alert variant="danger" className="login-alert">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="emailUsuario">
                <Form.Label className="login-label">Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="login-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contraseñaUsuario">
                <Form.Label className="login-label">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="login-input"
                  required
                />
              </Form.Group>

              <Link to="/registro" className="btn login-btn mb-3 w-100 text-center">
                Registrar Usuario
              </Link>

              <Button type="submit" className="login-btn w-100">
                Iniciar Sesión
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
