import { render } from '@testing-library/react';
import React from 'react';
import { Navbar } from '../index';

describe('Navbar', () => {
  it('to match snapshot', () => {
    const { container } = render(<Navbar title="" />);
    expect(container).toMatchSnapshot();
  });
});
