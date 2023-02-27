import { render } from '@testing-library/react';
import { Pricing } from '../index';

describe('Pricing', () => {
  it('to match snapshot', () => {
    const { container } = render(<Pricing />);
    expect(container).toMatchSnapshot();
  });
});
