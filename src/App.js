// src/App.js

import React from 'react';
// 1. Importamos Outlet de react-router-dom
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Importación de tus componentes (sin cambios)
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Portafolio from './components/Portafolio';
import Blog from './components/Blog';
import Contacto from './components/Contacto';

const PageLayout = () => (
  <div className="grupo-bloques">
    <Outlet />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* 3. Creamos una ruta "padre" que usa nuestro PageLayout. */}
          <Route element={<PageLayout />}>
            {/* Todas las rutas anidadas aquí se renderizarán dentro de PageLayout */}
            {/* ¡Ya no es necesario repetir el div en cada línea! */}
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
