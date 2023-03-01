import { render } from '@testing-library/react';
import React from 'react';
import { Product } from '../index';

describe('Product', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Product id="" title="" description="" image={''} price={0} />
    );
    expect(container).toMatchSnapshot();
  });
});
