import { render } from '@testing-library/react';
import { Header } from '../index';

describe('Header', () => {
  it('to match snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
