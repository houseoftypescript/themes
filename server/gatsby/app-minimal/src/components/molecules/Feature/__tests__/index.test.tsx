import { render } from '@testing-library/react';
import React from 'react';
import { Feature } from '../index';

describe('Feature', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Feature
        id={1}
        title="title"
        description="description"
        image=""
        imageAlt=""
      />
    );
    expect(container).toMatchSnapshot();
  });
});
