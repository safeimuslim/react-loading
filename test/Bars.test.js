import React from 'react';
import { shallow } from 'enzyme';

import Bars from '../src/Components/Bars';

describe('Test <Bars />', () => {
  it('renders without crashing', () => {
    shallow(<Bars />);
  });
});