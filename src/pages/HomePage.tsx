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

      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          {/* Profile Picture */}
          <img src={profileGif} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full flex-shrink-0 object-cover mb-4 md:mb-0" />
          
          <div className='flex flex-col justify-center items-center md:items-start gap-4'>
            <h1 className="text-3xl md:text-4xl font-bold">Matima</h1>
            
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/matiima11?igsh=MTN4djVxMDBhbThidA==" className="text-white hover:text-gray400" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="mailto:matiimacontacto@gmail.com" className="text-white hover:text-gray400 hover:text-white" aria-label="Email">
                <FaMailBulk size={24} />
              </a>
              <a href="https://www.tiktok.com/@matima_unu?_r=1&_t=ZM-91UCdyDjFHA" className="text-white hover:text-gray400 hover:text-white" aria-label="ArtStation">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main> 
  );
};

export default HomePage;
