import { render } from '@testing-library/react';
import { Portfolio } from '../index';

describe('Portfolio', () => {
  it('to match snapshot', () => {
    const { container } = render(<Portfolio />);
    expect(container).toMatchSnapshot();
  });
});
