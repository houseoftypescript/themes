import { render } from '@testing-library/react';
import { GradientButton } from '../index';

describe('GradientButton', () => {
  it('to match snapshot', () => {
    const { container } = render(<GradientButton scrolled />);
    expect(container).toMatchSnapshot();
  });
});
