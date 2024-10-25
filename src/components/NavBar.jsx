import { useState } from 'react';

const navItems = [
  { name: 'Inicio', href: '' },
  { name: 'Sobre Nosotros', href: 'acerca-de' },
  { name: 'Servicios', href: 'servicios' },
  { name: 'Contacto', href: 'contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo o nombre del sitio */}
            <a href="/" className=" ">
              <img src="./lgo.png" alt="" className=' h-14' />
            </a>
          </div>

          {/* Menú de navegación para pantallas grandes */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Botón hamburguesa para dispositivos móviles */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white  focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                    className="text-white"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    className="text-white"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil sin transiciones */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}