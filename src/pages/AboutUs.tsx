import React from "react";

function AboutUs() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="container bg-white overflow-hidden flex flex-col md:flex-row">
        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/images/elenavesc.jpg"
            alt="Nosotros"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nosotros</h2>
          <p className="text-gray-600 leading-relaxed">
            En Vesc, creemos en la moda inclusiva y hecha a medida para todos los cuerpos. Desde nuestros inicios, nos hemos comprometido con la calidad, el diseño y la personalización.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            Trabajamos con pasión para ofrecer prendas únicas que reflejen la esencia de cada persona. Nuestra misión es hacer que cada cliente se sienta especial con cada pieza que creamos.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-black text-white px-6 py-2 hover:bg-white hover:border hover:border-black hover:text-black transition"
          >
            Más información
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;