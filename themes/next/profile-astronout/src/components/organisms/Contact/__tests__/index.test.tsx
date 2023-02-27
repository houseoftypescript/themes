import { render } from '@testing-library/react';
import { Contact } from '../index';

describe('Contact', () => {
  it('to match snapshot', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
