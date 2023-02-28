import { render } from '@testing-library/react';
import { MobileMenu } from '../index';

describe('MobileMenu', () => {
  it('to match snapshot', () => {
    const { container } = render(<MobileMenu textColor="text-gray-900" />);
    expect(container).toMatchSnapshot();
  });
});
