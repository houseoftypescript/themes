import product01 from '@/assets/images/products/product01.jpeg';
import { render } from '@testing-library/react';
import { Product } from '../index';

describe('Product', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Product id="" title="" description="" image={product01} price={0} />
    );
    expect(container).toMatchSnapshot();
  });
});
