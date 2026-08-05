import React, { useEffect, useState } from 'react';
import { gestionProductos } from '../services/api';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const HomePage: React.FC = () => {
  

  const [productos, setProductos] = useState<any[]>([]); 
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const cargarProductos = async () => {
      try{
        setLoading(true);
        const respuesta = await gestionProductos.getAll();
        console.log("Productos traídos:", respuesta.data);
        setProductos(respuesta.data);

      }catch (error) {
        console.error('Error al cargar consultorios:', error);

      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  },[]);

  return (
    <Container className="mt-5 text-center">
      <h2 className="text-center mb-4">Catálogo de Productos</h2>
      <hr />

      <Row>
        {productos.map((producto) => (
          <Col key={producto._id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={producto.image}
                style={{ height: '200px', objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
                }}
              />
              <Card.Body>             
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                  Precio: ${producto.price}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(producto)}>Agregar al Carrito</Button>
              </Card.Body>
            </Card> 
          </Col>
        ))}
      </Row>
    </Container>
  );

};

export default HomePage;