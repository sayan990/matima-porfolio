export interface Drawing {
  id: number;
  title: string;
  src: string;
}

import profileGif from '../assets/profile.gif';
import drawing1 from '../assets/drawings/drawing1.jpeg';

export const drawings: Drawing[] = [
  {
    id: 1,
    title: 'Placeholder Drawing 1',
    src: profileGif,
  },
  {
    id: 2,
    title: 'Placeholder Drawing 2',
    src: drawing1,
  },
  
  // Para agregar más dibujos, copia el bloque de arriba y modifica los valores.
  // Ejemplo:
  // {
  //   id: 2,
  //   title: 'Mi Nuevo Dibujo',
  //   src: '/path/to/your/new/image.jpg',
  // },
];
