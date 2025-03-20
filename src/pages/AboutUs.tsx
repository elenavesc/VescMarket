import React from 'react';
import ProductPage from '../components/CatalogPage'; // Ajusta la ruta según donde esté tu componente

function AboutUs() {
  // Datos de ejemplo para la página de productos
  const productsData = [
    {
      id: '1',
      name: 'Vestido largo estampado',
      price: 49.95,
      image: ['/img/vestido1.jpg', '/img/vestido1_alt.jpg'],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    // Puedes añadir más productos aquí
  ];

  return (
    <div>
      <h1>¿Qué es Vesc?</h1>
      
    </div>
  );
}

export default AboutUs;