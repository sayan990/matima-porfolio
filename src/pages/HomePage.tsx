import React from 'react';
import { FaInstagram, FaTiktok, FaMailBulk } from 'react-icons/fa';
import profileGif from '../assets/profile.gif';
import fondo from '../assets/fondo.jpeg';

const HomePage: React.FC = () => {
  return (
    <main className="flex-1 text-white bg-gradient-to-b from-cyan-500 to-green-500">
      {/* Main Drawing Placeholder */}
      <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
        <img src={fondo} alt="Main Drawing" className="w-full h-full object-cover" />
      </div>

      <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 lg:space-x-12">
          {/* Profile Picture */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img src={profileGif} alt="Profile" className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex-shrink-0 object-cover mb-6 md:mb-0 border-4 border-gray-800" />
          </div>

          <div className='flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Matima</h1>


            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-2">
              <a href="https://www.instagram.com/matiima11?igsh=MTN4djVxMDBhbThidA==" className="text-white hover:text-pink-400 transition-colors transform hover:scale-110" aria-label="Instagram">
                <FaInstagram size={28} />
              </a>
              <a href="mailto:matiimacontacto@gmail.com" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110" aria-label="Email">
                <FaMailBulk size={28} />
              </a>
              <a href="https://www.tiktok.com/@matima_unu?_r=1&_t=ZM-91UCdyDjFHA" className="text-white hover:text-purple-400 transition-colors transform hover:scale-110" aria-label="TikTok">
                <FaTiktok size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
