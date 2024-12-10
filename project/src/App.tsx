import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { SpeedSelector } from './components/SpeedSelector';
import { VideoUpload } from './components/VideoUpload';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VideoUpload />
      <Features />
      <HowItWorks />
      <SpeedSelector />
    </div>
  );
}

export default App;