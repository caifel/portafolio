import React from 'react';
import { storiesOf } from '@storybook/react';
import AboutMeCard from '../src/App/components/cards/AboutMeCard';

const fn = e => console.log(e.target.checked, e.target.value);

storiesOf('AboutMeCard', module).add('Normal', () => (
   <div style={{ padding: '2rem' }}>
      <AboutMeCard
         style={{ marginTop: 10 }}
         questionText={'How many years of experience?'}
         answerText={'5 years'}
      />
      <AboutMeCard
         style={{ marginTop: 10 }}
         questionText={'Me and games'}
         answerText={'I play chess, being a former champion in my city'}
      />
      <AboutMeCard style={{ marginTop: 10 }} questionText={''} answerText={''} />
      <AboutMeCard style={{ marginTop: 10 }} questionText={''} answerText={''} />
   </div>
));
