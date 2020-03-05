import React from 'react';
import LocalizationProvider from './components/providers/LocalizationProvider';
import ModalProvider from './components/providers/ModalProvider';
import Portafolio from './scenes/Portafolio';

function App() {
   return (
      <LocalizationProvider>
         <ModalProvider>
            <Portafolio />
         </ModalProvider>
      </LocalizationProvider>
   );
}

export default App;
