import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 border-r border-gray-700">
      <nav className="h-full flex flex-col justify-center">
        <ul className='flex flex-col gap-4 justify-center '>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-300">Inicio</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-300">Galeria</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-300">Sobre mí</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Comiciones</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
