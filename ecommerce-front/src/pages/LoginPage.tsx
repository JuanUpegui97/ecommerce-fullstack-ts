import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';

const LoginPage: React.FC = () => {

  // La lógica de memoria sigue siendo idéntica
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault();

    try {
        const respuesta = await authService.login({ email, password });
        console.log("Respuesta del servidor:", respuesta.data);

        localStorage.setItem('token', respuesta.data.token);
        localStorage.setItem('usuarioNombre',respuesta.data.usuario);
        navigate('/');
        
    } catch (error) {
        console.error("Error al loguearse", error);
        alert("Usuario o contraseña incorrectos");
    }
    
    setEmail("");     
    setPassword("");  
  }

  return (

    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              
              <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="nombre@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Ingresar
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;