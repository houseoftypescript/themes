import { render } from '@testing-library/react';
import { Message } from '../index';

describe('Message', () => {
  it('to match snapshot', () => {
    const { container } = render(<Message />);
    expect(container).toMatchSnapshot();
  });
});
