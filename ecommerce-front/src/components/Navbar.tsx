import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, type CartItem } from '../context/CartContext';

const Navbar: React.FC = () => {

  const { cart } = useCart();

  const totaItems = cart.reduce(
    (acomulador: number, itemActual: CartItem) => {
      return acomulador + itemActual.cant;
    },
    0
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/"> Mi Ecommerce</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-2" to="/carrito">
                🛒
                <span className="badge bg-danger">{totaItems}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;