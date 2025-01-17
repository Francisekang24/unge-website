import { useEffect, useState } from 'react';

const BackgroundCarousel = () => {
  const backgrounds = [
    'url("cover/f2.webp")',
    'url("cover/f3.webp")',
    'url("cover/f4.webp")',
    'url("cover/f7.webp")',
    'url("cover/f8.webp")',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [backgrounds.length]);

  return (
    <div
      className="h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: backgrounds[currentIndex] }}
    ></div>
  );
};

export default BackgroundCarousel;
