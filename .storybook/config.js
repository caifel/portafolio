import { configure } from '@storybook/react';
import '../src/index.scss';

function loadStories() {
   require('../stories/ChooseBox');
   require('../stories/AboutMeCard');
}

configure(loadStories, module);
