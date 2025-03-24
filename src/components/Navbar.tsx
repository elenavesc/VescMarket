import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Navegación principal */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-black text-lg font-light transition-all ${
                isActive ? "font-medium" : ""
              }`
            }
          >
            Home
          </NavLink>

          {/* Sección Tienda con submenú desplegable al hacer click */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black text-lg font-light transition-all focus:outline-none"
            >
              Tienda
            </button>
            {/* Submenú */}
            {isMenuOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg p-4">
                <NavLink
                  to="/catalogChildren"
                  className="block px-4 py-2 text-black text-lg font-light hover:bg-gray-100"
                >
                  Peques
                </NavLink>
                <NavLink
                  to="/catalogBaby"
                  className="block px-4 py-2 text-black text-lg font-light hover:bg-gray-100"
                >
                  Bebés
                </NavLink>
                <NavLink
                  to="/catalogFlamenca"
                  className="block px-4 py-2 text-black text-lg font-light hover:bg-gray-100"
                >
                  Flamenca
                </NavLink>
                <NavLink
                  to="/catalogInvitada"
                  className="block px-4 py-2 text-black text-lg font-light hover:bg-gray-100"
                >
                  Invitada
                </NavLink>
                <NavLink
                  to="/catalogOtherEvents"
                  className="block px-4 py-2 text-black text-lg font-light hover:bg-gray-100"
                >
                  Eventos
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-black text-lg font-light transition-all ${
                isActive ? "font-medium" : ""
              }`
            }
          >
            Contacto
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              `text-black text-lg font-light transition-all ${
                isActive ? "font-medium" : ""
              }`
            }
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/sizes"
            className={({ isActive }) =>
              `text-black text-lg font-light transition-all ${
                isActive ? "font-medium" : ""
              }`
            }
          >
            Nuestras tallas
          </NavLink>
        </div>

        {/* Íconos de búsqueda y carrito */}
        <div className="flex space-x-4">
          <NavLink to="/search" className="text-black hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </NavLink>
          <NavLink to="/cart" className="text-black hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
