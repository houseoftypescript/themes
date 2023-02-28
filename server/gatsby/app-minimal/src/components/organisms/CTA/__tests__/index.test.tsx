import { render } from '@testing-library/react';
import React from 'react';
import { CTA } from '../index';

describe('CTA', () => {
  it('to match snapshot', () => {
    const { container } = render(<CTA title="title" subtitle="subtitle" />);
    expect(container).toMatchSnapshot();
  });
});
