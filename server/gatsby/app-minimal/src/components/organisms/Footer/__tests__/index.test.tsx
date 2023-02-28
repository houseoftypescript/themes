import { render } from '@testing-library/react';
import React from 'react';
import { Footer } from '../index';

describe('Footer', () => {
  it('to match snapshot', () => {
    const { container } = render(<Footer title="title" />);
    expect(container).toMatchSnapshot();
  });
});
