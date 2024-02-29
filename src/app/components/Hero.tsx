// components/Hero.tsx
import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative h-screen overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-center items-center h-full">
        <div className="text-center text-white">
          <h1 className="font-extrabold text-5xl sm:text-7xl leading-tight mt-4">
            {title}
          </h1>
          <p className="font-extrabold text-md sm:text-lg my-6">
            {description}
          </p>
          <a href="#" className="inline-block bg-white text-black py-3 px-4 text-center font-bold rounded-lg hover:bg-gray-100">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero; // Make sure this is a default export