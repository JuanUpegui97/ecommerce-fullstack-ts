import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import { AuthProvider } from './context/AuthContext';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>

        <div>
          <Navbar />

          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/carrito" element={<CartPage />} />
            </Routes>
          </div>
        </div>

      </CartProvider>
    </AuthProvider>
  );
};

export default App;