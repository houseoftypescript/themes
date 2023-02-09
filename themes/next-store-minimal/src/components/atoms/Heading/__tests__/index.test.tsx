import { render } from '@testing-library/react';
import { Heading } from '../index';

describe('Heading', () => {
  it('to match snapshot', () => {
    const { container } = render(<Heading>Heading</Heading>);
    expect(container).toMatchSnapshot();
  });
});
