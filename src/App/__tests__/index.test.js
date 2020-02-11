import React from 'react';
import App from '../';
import { shallow } from 'enzyme';

describe('', () => {
   it('Header has class equal to "App-header"', () => {
      const component = shallow(<App />);
      expect(component.find('AppHeader').length).toBe(1);
   });
});
