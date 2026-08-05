import React, { useEffect, useState } from 'react';
import { gestionProductos } from '../services/api';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';



const CartPage: React.FC = () => {
    const { addToCart, restToCart, cart, clearCart } = useCart();


    const totalCarrito = cart.reduce(
        (acumulador, item) => acumulador + (item.price * item.cant),
        0
    );





    return (
        <Container>
            <h2 className="text-center mb-4">Carrito de compras</h2>
            <hr />
            <Row>
                {cart.map((item) => (
                    <Col key={item._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="h-100 shadow-sm border-0 rounded-4 product-card">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                style={{ height: '200px', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x400?text=No+Image";
                                }}
                            />
                            <Card.Body className="p-4">
                                <div className="d-flex justify-content-between align-items-center">

                                    <Card.Title className="mb-0">
                                        {item.name}
                                    </Card.Title>

                                    <span className="text-success fw-bold fs-5">
                                        ${item.price.toLocaleString()}
                                    </span>

                                </div>
                                <div className="d-flex justify-content-end align-items-center gap-2 mt-2">

                                    <Button size="sm" variant="danger"
                                        onClick={() => restToCart(item._id)}>
                                        -
                                    </Button>

                                    <span className="fw-bold">{item.cant}</span>

                                    <Button size="sm" variant="primary"
                                        onClick={() => addToCart(item)}>
                                        +
                                    </Button>

                                </div>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}
            </Row>
            <div className="mt-3 fs-5">
                Total: <span className="fw-bold text-success">
                    ${totalCarrito.toLocaleString()}
                </span>
            </div>
            <div className="mt-2">
                <Button variant="outline-danger" onClick={clearCart}>
                    Vaciar carrito
                </Button>
            </div>

        </Container>
    );
};

export default CartPage;