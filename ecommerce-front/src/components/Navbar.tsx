import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, type CartItem } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";


const Navbar: React.FC = () => {

  const navigate = useNavigate();

  const { cart } = useCart();

  const { user, logout } = useAuth();

  const totaItems = cart.reduce(
    (acomulador: number, itemActual: CartItem) => {
      return acomulador + itemActual.cant;
    },
    0
  );

  const handLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4" >

      <Container>

        {/* Marca */}
        <Link className="navbar-brand" to="/">Mi Ecommerce</Link>

        {/* Botón hamburguesa */}
        <BootstrapNavbar.Toggle aria-controls="navbarMenu" />

        {/* Contenido responsive */}
        <BootstrapNavbar.Collapse id="navbarMenu">

          {/* Grupo 1: navegación principal */}
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

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

          {/* Grupo 2: autenticación y usuario */}
          <Nav>

            {/* Si NO hay usuario */}
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>

                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}

            {/* Si SÍ hay usuario */}
            {user && (
              <>
                <Nav.Link disabled>
                  Hola, {user.username}
                </Nav.Link>

                {user.rolename === "cliente" && (
                  <Nav.Link as={Link} to="/perfil">
                    Perfil
                  </Nav.Link>
                )}

                <Nav.Link as="button" onClick={handLogout}>
                  Logout
                </Nav.Link>
              </>
            )}

            {/* Grupo 3: adminisrador */}

            {user?.rolename === "administrador" && (
              <NavDropdown
                title="Gestión Ecommerce"
                id="gestion-ecommerce-dropdown"
              >
                <NavDropdown.Item as={Link} to="/gestioncategorias">
                  CATEGORÍAS
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/gestiontiposproducto">
                  TIPOS DE PRODUCTO
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/gestionplantillas">
                  PLANTILLAS DE PRODUCTO
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/gestioninventario">
                  INVENTARIO
                </NavDropdown.Item>
              </NavDropdown>
            )}

          </Nav>

        </BootstrapNavbar.Collapse>

      </Container>

    </BootstrapNavbar>
  );
};

export default Navbar;