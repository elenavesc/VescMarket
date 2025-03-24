import React, { useState, useEffect } from 'react';

// Tipos para nuestros datos
type ProductCategory = 'Invitada' | 'Children' | 'Flamenca' | 'Bebé' |'Eventos';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
}

interface ProductPageProps {
  category: ProductCategory;
  title: string;
  description?: string;
  products: Product[];
  filters?: {
    colors?: string[];
    sizes?: string[];
    priceRanges?: { min: number; max: number }[];
  };
}

const ProductPage: React.FC<ProductPageProps> = ({
  category,
  title,
  description,
  products,
  filters,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState(false);

  // Comprobar si estamos en vista móvil
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para manejar la apertura/cierre de filtros
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full bg-white">
      {/* Barra de navegación superior */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl uppercase font-light tracking-widest">{title}</h1>
          
          {/* Botón de filtros móvil */}
          <button 
            className="md:hidden uppercase text-sm font-light"
            onClick={toggleFilters}
          >
            Filtros
          </button>
          
          {/* Filtros de escritorio */}
          <div className="hidden md:flex space-x-6">
            {filters?.colors && (
              <div className="relative group">
                <button className="uppercase text-sm font-light hover:underline">
                  Color
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md p-4 mt-2 w-48 z-20">
                  {filters.colors.map((color) => (
                    <div key={color} className="flex items-center mb-2">
                      <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: color }}></span>
                      <span className="text-sm">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {filters?.sizes && (
              <div className="relative group">
                <button className="uppercase text-sm font-light hover:underline">
                  Talla
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md p-4 mt-2 w-48 z-20">
                  {filters.sizes.map((size) => (
                    <div key={size} className="text-sm mb-2">{size}</div>
                  ))}
                </div>
              </div>
            )}
            
            {filters?.priceRanges && (
              <div className="relative group">
                <button className="uppercase text-sm font-light hover:underline">
                  Precio
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-md p-4 mt-2 w-48 z-20">
                  {filters.priceRanges.map((range, index) => (
                    <div key={index} className="text-sm mb-2">
                      {range.min}€ - {range.max}€
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Panel de filtros móvil */}
      {showFilters && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-4 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg uppercase font-light">Filtros</h2>
            <button 
              className="text-lg"
              onClick={toggleFilters}
            >
              ×
            </button>
          </div>
          
          {filters?.colors && (
            <div className="mb-6">
              <h3 className="uppercase text-sm font-medium mb-2">Color</h3>
              <div className="grid grid-cols-4 gap-2">
                {filters.colors.map((color) => (
                  <div key={color} className="flex flex-col items-center">
                    <div 
                      className="w-8 h-8 rounded-full mb-1" 
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-xs">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {filters?.sizes && (
            <div className="mb-6">
              <h3 className="uppercase text-sm font-medium mb-2">Talla</h3>
              <div className="grid grid-cols-4 gap-2">
                {filters.sizes.map((size) => (
                  <div 
                    key={size} 
                    className="border border-gray-300 p-2 text-center text-sm"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {filters?.priceRanges && (
            <div className="mb-6">
              <h3 className="uppercase text-sm font-medium mb-2">Precio</h3>
              <div className="space-y-2">
                {filters.priceRanges.map((range, index) => (
                  <div 
                    key={index} 
                    className="p-2 text-sm border-b border-gray-200"
                  >
                    {range.min}€ - {range.max}€
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button 
            className="w-full p-3 bg-black text-white uppercase text-sm mt-4"
            onClick={toggleFilters}
          >
            Ver productos
          </button>
        </div>
      )}

      {/* Descripción de categoría */}
      {description && (
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
      )}

      {/* Cuadrícula de productos */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div 
              key={product.id}
              className="relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={hoveredProduct === product.id && product.images.length > 1 ? product.images[1] : product.images[0]} 
                  alt={product.name}
                  className="w-88 h-96 object-cover object-center transition-opacity duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-white px-2 py-1">
                    <span className="text-xs uppercase">Nuevo</span>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-light">{product.name}</h3>
                <p className="text-sm mt-1">{product.price.toFixed(2)}€</p>
                
                {/* Colores disponibles */}
                <div className="flex mt-2 space-x-1">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="w-3 h-3 rounded-full border border-gray-300" 
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// Ejemplo de uso:
/*
import ProductPage from './components/ProductPage';

// Datos simulados
const productsData = [
  {
    id: '1',
    name: 'Vestido largo estampado',
    price: 49.95,
    images: ['/img/vestido1.jpg', '/img/vestido1_alt.jpg'],
    colors: ['#000000', '#FFFFFF', '#A52A2A'],
    sizes: ['XS', 'S', 'M', 'L'],
    isNew: true,
  },
  // ... más productos
];

const App = () => {
  return (
    <ProductPage
      category="invitada"
      title="Vestidos de invitada"
      description="Descubre nuestra colección de vestidos para eventos especiales."
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
  );
};
*/