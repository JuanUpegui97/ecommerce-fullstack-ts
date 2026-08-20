import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, type CartItem } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar: React.FC = () => {

  const { cart } = useCart();

  const { user, logout } = useAuth();

  const totaItems = cart.reduce(
    (acomulador: number, itemActual: CartItem) => {
      return acomulador + itemActual.cant;
    },
    0
  );

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4" >
      <Container>

        <Link className="navbar-brand" to="/">
          Mi Ecommerce
        </Link>

        <BootstrapNavbar.Toggle aria-controls="navbarMenu" />

        <BootstrapNavbar.Collapse id="navbarMenu">

          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {/* Si NO hay usuario */}
            {!user && (
              <>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>

                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </>
            )}

            {/* Si SÍ hay usuario */}
            {user && (
              <>
                <Nav.Link disabled>
                  Hola, {user.username}
                </Nav.Link>

                {user?.rolename === "cliente" && (
                  <Link className="nav-link" to="/perfil">
                    Perfil
                  </Link>
                )}

                <Nav.Link as="button" onClick={logout}>
                  Logout
                </Nav.Link>
              </>
            )}

            {/* Carrito */}
            <Nav.Link
              as={Link}
              to="/carrito"
              className="d-flex align-items-center gap-2"
            >
              🛒
              <span className="badge bg-danger">
                {totaItems}
              </span>
            </Nav.Link>

          </Nav>

        </BootstrapNavbar.Collapse>

      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;