import React from 'react';
import { Rewind } from 'lucide-react';

const speeds = ['0.5X', '1X', '2X'];

export function SpeedSelector() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Play your video backwards</h2>
        <p className="text-xl text-gray-600 mb-12">Choose the necessary reverse speed and mute sound</p>
        <div className="flex justify-center gap-4">
          {speeds.map((speed) => (
            <button
              key={speed}
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <Rewind className="w-5 h-5" />
              {speed}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}