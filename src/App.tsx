import React from 'react';

// components
import BannerTop from '../src/components/BannerTop/BannerTop';
import Hero from '../src/components/Hero/Hero';
import HowItWorks from '../src/components/HowItWorks/HowItWorks';

const App: React.FC = () => (
    <>
      <BannerTop/>
      <Hero />
      <HowItWorks />
    </>
);

export default App;