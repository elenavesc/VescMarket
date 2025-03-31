
import ProductPage from '../components/CatalogPage'; // Ajusta la ruta según donde esté tu componente

function CatalogGuest() {
  // Datos de ejemplo para la página de productos
  const productsData = [
    {
      id: '1',
      name: 'Vestido largo',
      price: 49.95,
      images: ['/images/guest.jpg'],
      colors: ['#000000', '#FFFFFF', '#A52A2A'],
      sizes: ['XS', 'S', 'M', 'L'],
      isNew: true,
    },
  ];

  return (
    <div>
      
      {/* Aquí importas el componente ProductPage */}
      <ProductPage
        category="Invitada"
        title="Invitada"
        description="Encuentra el vestido que te haga sentirte radiante."
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

export default CatalogGuest;