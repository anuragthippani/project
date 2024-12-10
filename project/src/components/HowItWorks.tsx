import React from 'react';
import { Upload, Settings, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Open a video file',
    description: 'Select a clip for reversing from your Mac or Windows computer, iOS or Android device, or cloud storage.'
  },
  {
    icon: Settings,
    title: 'Adjust the video',
    description: 'Choose your preferred reverse speed (0.5X, 1X, or 2X) and customize audio settings.'
  },
  {
    icon: Download,
    title: 'Save the reversed video',
    description: 'Download your reversed video in your preferred format and share it on social media.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How to reverse a video</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="bg-white p-6 rounded-xl">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm mb-4">
                  STEP {index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}