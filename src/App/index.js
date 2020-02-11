import React, { Fragment } from 'react';

import AppHeader from './components/AppHeader';
import Navigation from './components/Navigation';
import AppSection from './components/AppSection';
import AppFooter from './components/AppFooter';

import { ModalWrap } from './contexts/ModalContext';

function App() {
   return (
      <ModalWrap>
         <Fragment>
            <Navigation />
            <AppHeader />
            <main>
               <AppSection content={''} id="about" title={'About'} style={{ height: 500 }} />
               <AppSection content={''} id="skills" title={'Skills'} style={{ height: 500 }} />
               <AppSection content={''} id="my-work" title={'My Work'} style={{ height: 500 }} />
               <AppSection content={''} id="phothos" title={'Photos'} style={{ height: 500 }} />
            </main>
            <AppFooter />
         </Fragment>
      </ModalWrap>
   );
}

export default App;
