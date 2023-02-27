import { render } from '@testing-library/react';
import { About } from '../index';

describe('About', () => {
  it('to match snapshot', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
