import React from 'react';
import ProductPage from '../components/CatalogPage'; // Ajusta la ruta según donde esté tu componente

function CatalogFlamenca() {
  // Datos de ejemplo para la página de productos
  const productsData = [
    {
      id: '1',
      name: 'Vestido corte cadera',
      price: 49.95,
      images: ['/images/flamenca.jpg'],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    }
  ];

  return (
    <div>
      
      {/* Aquí importas el componente ProductPage */}
      <ProductPage
        category="Flamenca"
        title="Flamenca"
        description="El lugar donde tradición y buen hacer se unen para crear el vestido de tus sueños."
        products={productsData}
        filters={{
          colors: ['Negro', 'Blanco', 'Rojo', 'Azul'],
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          priceRanges: [
            { min: 0, max: 30 },
            { min: 30, max: 50 },
            { min: 50, max: 100 },
          ],
        }}
      />
    </div>
  );
}

export default CatalogFlamenca;