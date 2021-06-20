import React from 'react';
import { shallow } from 'enzyme';
import { UnloggedBarComponent } from './UnloggedBar';

describe('Component UnloggedBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<UnloggedBarComponent />);
    expect(component).toBeTruthy();
  });
});
