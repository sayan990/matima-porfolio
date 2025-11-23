import sketchFace from '../assets/commissions/sketch_face.png';
import sketchHalf from '../assets/commissions/sketch_half.png';
import sketchFull from '../assets/commissions/sketch_full.png';
import sketchColorFace from '../assets/commissions/sketch_color_face.png';
import sketchColorHalf from '../assets/commissions/sketch_color_half.png';
import sketchColorFull from '../assets/commissions/sketch_color_full.png';
import renderFace from '../assets/commissions/render_face.png';

// Reutilizando renderFace para imágenes faltantes por ahora
const renderHalf = renderFace;
const renderFull = renderFace;

const CommissionSection = ({ title, extraPrice, items }: { title: string, extraPrice: number, items: { subtitle: string, price: number, image1: string, image2: string }[] }) => (
    <div className="mb-16">
        <div className="flex flex-col items-center mb-8 border-b border-purple-800 pb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4 text-center">{title}</h2>
            <button className="px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-full text-sm md:text-base transition-colors shadow-md">
                Personaje extra +${extraPrice}
            </button>
        </div>
        <div className="space-y-12">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl text-gray-300 mb-4 text-center font-semibold">{item.subtitle} <span className="text-purple-300">${item.price}</span></h3>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full">
                        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 w-full max-w-xs md:max-w-sm">
                            <img src={item.image1} alt={`${item.subtitle} ejemplo 1`} className="w-full h-64 md:h-80 object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>
                        <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 w-full max-w-xs md:max-w-sm">
                            <img src={item.image2} alt={`${item.subtitle} ejemplo 2`} className="w-full h-64 md:h-80 object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Commissions = () => {
    const sections = [
        {
            title: "Sketch",
            extraPrice: 2,
            items: [
                { subtitle: "Rostro", price: 2, image1: sketchFace, image2: sketchFace },
                { subtitle: "Medio cuerpo", price: 3, image1: sketchHalf, image2: sketchHalf },
                { subtitle: "Cuerpo completo", price: 4, image1: sketchFull, image2: sketchFull },
            ]
        },
        {
            title: "Sketch Color",
            extraPrice: 5,
            items: [
                { subtitle: "Rostro", price: 6, image1: sketchColorFace, image2: sketchColorFace },
                { subtitle: "Medio cuerpo", price: 12, image1: sketchColorHalf, image2: sketchColorHalf },
                { subtitle: "Cuerpo completo", price: 20, image1: sketchColorFull, image2: sketchColorFull },
            ]
        },
        {
            title: "Render",
            extraPrice: 6,
            items: [
                { subtitle: "Rostro", price: 1000, image1: renderFace, image2: renderFace },
                { subtitle: "Medio cuerpo", price: 1500, image1: renderHalf, image2: renderHalf },
                { subtitle: "Cuerpo completo", price: 2000, image1: renderFull, image2: renderFull },
            ]
        }
    ];

    return (
        <div className="min-h-full text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12 text-center">
                    Comisiones
                </h1>

                {sections.map((section, index) => (
                    <CommissionSection key={index} title={section.title} extraPrice={section.extraPrice} items={section.items} />
                ))}
            </div>
        </div>
    );
};

export default Commissions;
