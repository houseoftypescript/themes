import { render } from '@testing-library/react';
import React from 'react';
import { Profile } from '../index';

describe('Profile', () => {
  it('to match snapshot', () => {
    const { container } = render(<Profile />);
    expect(container).toMatchSnapshot();
  });
});
