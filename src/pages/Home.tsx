import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroimage = [
    {
      url: "/public/images/flamenca.jpg",
      alt: "Colección Flamenca 2025",
      title: "COLECCIÓN FLAMENCA 2025",
      link: "/catalogFlamenca"
    },
    {
      url: "/public/images/child.jpg",
      alt: "Nueva temporada infantil",
      title: "PRIMAVERA | VERANO PEQUES",
      link: "/catalogChildren"
    },
    {
      url: "/public/images/guest.jpg",
      alt: "Looks de invitada",
      title: "INVITADA PERFECTA",
      link: "/catalogInvitada"
    }
  ];
  
  const categories = [
    { name: "PEQUES", link: "/catalogChildren", image: "/public/images/child.jpg" },
    { name: "BEBÉS", link: "/catalogBaby", image: "/public/images/baby.jpg" },
    { name: "FLAMENCA", link: "/catalogFlamenca", image: "/public/images/flamenca.jpg" },
    { name: "INVITADA", link: "/catalogInvitada", image: "/public/images/guest.jpg",},
    { name: "EVENTOS", link: "/catalogOtherEvents", image: "/public/images/events.jpg", }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroimage.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroimage.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroimage.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroimage.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {heroimage.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-4xl md:text-6xl font-light tracking-wider text-center px-8">
                {image.title}
              </h1>
              <Link 
                to={image.link}
                className="mt-8 px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                VER COLECCIÓN
              </Link>
            </div>
          </div>
        ))}
        
        {/* Controls */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      
      {/* Categories Section */}
      <div className="py-16 px-4 md:px-8">
        <h2 className="text-center text-2xl mb-12 font-light tracking-wider">EXPLORA NUESTRAS COLECCIONES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <h3 className="text-white text-xl tracking-wide">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;