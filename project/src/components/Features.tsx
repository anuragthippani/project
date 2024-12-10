import React from 'react';
import { Gauge, Zap, FileVideo, Cloud, Shield, Music } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Editing Options',
    description: 'The tool offers three different video speeds, so you can reverse your video in real-time, slow motion or extra-fast.'
  },
  {
    icon: Zap,
    title: 'Fast Editor',
    description: 'Our editor is developed to work faster than any other video reverser, so you get amazing videos without the wait.'
  },
  {
    icon: FileVideo,
    title: 'Supports All Video Formats',
    description: 'Reverse video tool supports a variety of formats including MP4, AVI, MPG, VOB, WMV, MOV and more.'
  },
  {
    icon: Cloud,
    title: 'No Need to Download',
    description: 'Clideo works right in your browser, so you don\'t need to download anything to your device.'
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We offer the highest level of security via full encryption so that you\'re the only one who can access your files.'
  },
  {
    icon: Music,
    title: 'Additional Features',
    description: 'After reversing, you can mute the video and convert it to any desired format if necessary.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}