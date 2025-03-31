
import ProductPage from '../components/CatalogPage'; // Ajusta la ruta según donde esté tu componente

function CatalogBaby() {
  // Datos de ejemplo para la página de productos
  const productsData = [
    {
      id: '1',
      name: 'Vestido largo estampado',
      price: 49.95,
      images: ['/images/baby2.jpg'],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Vestido evento',
      price: 49.95,
      images: ['/images/baby3.jpg',],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Ranita rallas',
      price: 49.95,
      images: ['/images/baby5.jpg',],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Vestido largo estampado',
      price: 49.95,
      images: ['/images/baby2.jpg'],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Vestido evento',
      price: 49.95,
      images: ['/images/baby3.jpg',],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Ranita rallas',
      price: 49.95,
      images: ['/images/baby5.jpg',],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Vestido largo estampado',
      price: 49.95,
      images: ['/images/baby2.jpg'],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Vestido evento',
      price: 49.95,
      images: ['/images/baby3.jpg',],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    {
      id: '1',
      name: 'Ranita rallas',
      price: 49.95,
      images: ['/images/baby5.jpg',],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
    // Puedes añadir más productos aquí
  ];

  return (
    <div>
      
      {/* Aquí importas el componente ProductPage */}
      <ProductPage
        category="Bebé"
        title="Peques"
        description="Descubre nuestra colección para los más pequeños de la casa."
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

export default CatalogBaby;