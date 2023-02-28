import { render } from '@testing-library/react';
import { Social } from '../index';

describe('Social', () => {
  it('to match snapshot', () => {
    const { container } = render(<Social />);
    expect(container).toMatchSnapshot();
  });
});
