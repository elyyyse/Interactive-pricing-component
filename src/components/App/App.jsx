import React from 'react';

import './App.css';
import Heading from '../Heading/Heading';
import PricingDialog from '../PricingDialog';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <main>
        <Heading
          heading='Simple, traffic-based pricing'
          subHeadOne='Sign-up for our 30-day trial.'
          subHeadTwo='No credit card required.'
        />
        <PricingDialog />
      </main>
      <Footer />
    </>
  );
}

export default App;
