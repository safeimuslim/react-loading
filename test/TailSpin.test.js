import React from 'react';
import { shallow } from 'enzyme';

import TailSpin from '../src/Components/TailSpin';

describe('Test <TailSpin />', () => {
  it('renders without crashing', () => {
    shallow(<TailSpin />);
  });
});