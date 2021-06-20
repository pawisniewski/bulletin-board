import React from 'react';
import { shallow } from 'enzyme';
import { LoggedBarComponent } from './LoggedBar';

describe('Component LoggedBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoggedBarComponent />);
    expect(component).toBeTruthy();
  });
});
