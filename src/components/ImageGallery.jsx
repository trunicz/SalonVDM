import { useState } from 'react';

const images = [
  '/images/Img1.jpg',
  '/images/Img2.jpg',
  '/images/Img3.jpg',
  '/images/Img4.jpg',
  '/images/Img5.jpg',
  '/images/Img6.jpg',
  '/images/Img7.jpg',
  '/images/Img8.jpg',
  '/images/Img9.jpg',
  '/images/Img10.jpg',
  '/images/Img11.jpg',
  '/images/Img12.jpg',
  '/images/Img13.jpg',
  '/images/Img14.jpg',
  '/images/Img15.jpg',
  '/images/Img16.jpg',
  '/images/Img17.jpg',
  '/images/Img18.jpg',
  '/images/Img19.jpg',
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            onClick={() => openModal(index)}
            className="group relative cursor-pointer overflow-hidden rounded-xl h-64 shadow-md hover:shadow-xl transition-all"
          >
            <img 
              src={src} 
              alt={`Galería ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
               <span className="text-white text-sm font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">Ver</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/50 hover:text-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <img 
            src={selectedImage} 
            alt="Vista ampliada" 
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />

          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
