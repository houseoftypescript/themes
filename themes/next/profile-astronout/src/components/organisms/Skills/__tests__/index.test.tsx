import { render } from '@testing-library/react';
import { Skills } from '../index';

describe('Skills', () => {
  it('to match snapshot', () => {
    const { container } = render(<Skills />);
    expect(container).toMatchSnapshot();
  });
});
