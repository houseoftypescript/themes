import { render } from '@testing-library/react';
import { Products } from '../index';

describe('Product', () => {
  it('to match snapshot', () => {
    const { container } = render(<Products products={[]} />);
    expect(container).toMatchSnapshot();
  });
});
