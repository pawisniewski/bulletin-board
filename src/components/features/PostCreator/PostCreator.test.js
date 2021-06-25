import React from 'react';
import { shallow } from 'enzyme';
import { PostCreatorComponent } from './PostCreator';

describe('Component PostCreator', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostCreatorComponent />);
    expect(component).toBeTruthy();
  });
});
