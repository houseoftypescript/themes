import { render } from '@testing-library/react';
import React from 'react';
import { Services } from '../index';

describe('Services', () => {
  it('to match snapshot', () => {
    const { container } = render(<Services />);
    expect(container).toMatchSnapshot();
  });
});
