import React from 'react';
import { Play, Star } from 'lucide-react';

export function Header() {
  const scrollToUpload = () => {
    window.scrollTo({
      top: document.querySelector('.upload-section')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Reverse Video</h1>
        <p className="text-xl mb-8">Instantly add a reverse effect to any video</p>
        <button
          onClick={scrollToUpload}
          className="bg-white text-indigo-800 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center mx-auto gap-2"
        >
          <Play size={20} />
          Get Started
        </button>
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
            ))}
          </div>
          <span className="text-lg">4.8</span>
          <span className="text-gray-300">• 5,300 reviews</span>
        </div>
      </div>
    </header>
  );
}