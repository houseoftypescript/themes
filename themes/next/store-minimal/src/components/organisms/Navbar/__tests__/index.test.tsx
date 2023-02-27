import product01 from '@/assets/images/products/product01.jpeg';
import { render } from '@testing-library/react';
import { Navbar } from '../index';

describe('Navbar', () => {
  it('to match snapshot', () => {
    const { container } = render(<Navbar title="" />);
    expect(container).toMatchSnapshot();
  });
});
