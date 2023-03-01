import { render } from '@testing-library/react';
import { Footer } from '../index';
import React from 'react';

describe('Footer', () => {
  it('to match snapshot', () => {
    const { container } = render(<Footer title="" />);
    expect(container).toMatchSnapshot();
  });
});
