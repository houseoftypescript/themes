import { render } from '@testing-library/react';
import { Description } from '../index';

describe('Description', () => {
  it('to match snapshot', () => {
    const { container } = render(<Description>Description</Description>);
    expect(container).toMatchSnapshot();
  });
});
