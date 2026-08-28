import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PerfilPage from './pages/PerfilPage';
import RegisterPage from './pages/RegisterPage';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import GestionProductosPage from './pages/admin/GestionProductosPage';
import GestionCategoriasPage from './pages/admin/GestionCategoriasPage';



const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>

        <div>
          <Navbar />

          <div className="container">
            <Routes>

              {/* Rutas públicas */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/carrito" element={<CartPage />} />

              {/* Rutas protegidas */}
              <Route element={<ProtectedRoute rolesPermitidos={["cliente"]} />}>
                <Route path="/perfil" element={<PerfilPage />} />
              </Route>

              {/* Rutas protegidas */}
              <Route element={<ProtectedRoute rolesPermitidos={["administrador"]} />}>
                <Route path="/gestioncategorias" element={<GestionCategoriasPage />} />
              </Route>

            </Routes>
          </div>
        </div>

      </CartProvider>
    </AuthProvider>
  );
};

export default App;