import React from 'react';
import { drawings } from '../data/drawings';

const Gallery: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Galería</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {drawings.map((drawing) => (
          <div key={drawing.id} className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={drawing.src}
              alt={drawing.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
