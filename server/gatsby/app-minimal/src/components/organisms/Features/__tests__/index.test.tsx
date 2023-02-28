import { render } from '@testing-library/react';
import React from 'react';
import { Features } from '../index';

describe('Features', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Features title="title" description="description" features={[]} />
    );
    expect(container).toMatchSnapshot();
  });
});
