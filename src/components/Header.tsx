import React from 'react';
import { FaBars } from 'react-icons/fa';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="md:hidden bg-gray-800 text-white p-4 flex justify-end">
      <button onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>
    </header>
  );
};

export default Header;
