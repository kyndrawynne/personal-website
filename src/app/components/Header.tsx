// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-violet-500 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-xl font-semibold">Kyndra Wynne</a>
        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
