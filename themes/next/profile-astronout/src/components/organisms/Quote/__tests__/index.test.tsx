import { render } from '@testing-library/react';
import { Quote } from '../index';

describe('Quote', () => {
  it('to match snapshot', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
