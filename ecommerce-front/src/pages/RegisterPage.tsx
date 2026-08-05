import React, { useState } from 'react';
import { Container , Col, Row, Button , Form} from 'react-bootstrap';






const RegisterPage: React.FC = () => {

  const [nombre, setNombre] =  useState("");
  const [correo, setCorreo] =  useState("");
  const [contraseña, setConstraseña] =  useState("");





  return (
    <Container>
     <Row>
      <Col>
      <Form>

      </Form>
      </Col>
      </Row> 
    </Container>
  );
};

export default RegisterPage;