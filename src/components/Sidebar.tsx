import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  navigateTo: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, navigateTo }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white p-4 border-r border-gray-700 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <nav className="h-full flex flex-col justify-center">
        <ul className='flex flex-col gap-4 justify-center '>
          <li className="mb-4">
            <a href="#" onClick={() => navigateTo('home')} className="hover:text-gray-300 cursor-pointer">Inicio</a>
          </li>
          <li className="mb-4">
            <a href="#" onClick={() => navigateTo('gallery')} className="hover:text-gray-300 cursor-pointer">Galeria</a>
          </li>
          <li className="mb-4">
            <a href="#" className="hover:text-gray-300">Sobre mí</a>
          </li>
          <li>
            <a href="#" onClick={() => navigateTo('commissions')} className="hover:text-gray-300 cursor-pointer">Comisiones</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
