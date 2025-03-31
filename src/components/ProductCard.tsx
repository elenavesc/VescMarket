import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/productsData";

const ProductCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">Producto no encontrado</div>;
  }

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="text-sm text-gray-600 hover:underline">← Volver</Link>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-xl font-light">{product.name}</h1>
        <p className="mt-2 text-lg">{product.price.toFixed(2)}€</p>

        <div className="grid grid-cols-2 gap-2">
          {product.image.map((image, index) => (
            <img key={index} src={image} alt={`${product.name} ${index + 1}`} className="w-full" />
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-sm uppercase mb-2">Selecciona talla:</h2>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`p-2 border ${selectedSize === size ? "border-black" : "border-gray-300"}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full mt-4 p-3 bg-black text-white uppercase text-sm" disabled={!selectedSize}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
