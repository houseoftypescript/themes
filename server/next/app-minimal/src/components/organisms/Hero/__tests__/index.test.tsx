import { render } from '@testing-library/react';
import { Hero } from '../index';

describe('Hero', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Hero title="title" subtitle="subtitle" description="description" />
    );
    expect(container).toMatchSnapshot();
  });
});
