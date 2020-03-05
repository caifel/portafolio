import React, { useContext } from 'react';
import SectionWrap from './sectionWrap';
import About from '../scenes/About';
import { LocalizationContext } from '../../../contexts';

function AppMain() {
   const { strings } = useContext(LocalizationContext);
   return (
      <main>
         <SectionWrap
            content={<About />}
            id="about"
            style={{ height: 500 }}
            title={strings.common.titles.about}
         />
         <SectionWrap
            content={''}
            id="skills"
            style={{ height: 500 }}
            title={strings.common.titles.skills}
         />
         <SectionWrap
            content={''}
            id="my-work"
            style={{ height: 500 }}
            title={strings.common.titles.myWork}
         />
         <SectionWrap
            content={''}
            id="phothos"
            style={{ height: 500 }}
            title={strings.common.titles.photos}
         />
      </main>
   );
}

export default AppMain;
