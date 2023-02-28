import { render } from '@testing-library/react';
import { Service } from '../index';

describe('Service', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Service image="" title="title" description="description" tools={[]} />
    );
    expect(container).toMatchSnapshot();
  });
});
