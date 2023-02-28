import { render } from '@testing-library/react';
import React from 'react';
import { Projects } from '../index';

describe('Projects', () => {
  it('to match snapshot', () => {
    const { container } = render(<Projects />);
    expect(container).toMatchSnapshot();
  });
});
