import React, { Fragment } from 'react';
import Navigation from './components/navigation';
import HeroSection from './components/HeroSection';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Portafolio() {
   return (
      <Fragment>
         <Navigation />
         <HeroSection />
         <Main />
         <Footer />
      </Fragment>
   );
}
