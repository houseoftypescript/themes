import { render } from '@testing-library/react';
import { HomeTemplate } from '../index';
import React from 'react';

describe('HomeTemplate', () => {
  it('to match snapshot', () => {
    const { container } = render(<HomeTemplate />);
    expect(container).toMatchSnapshot();
  });
});
