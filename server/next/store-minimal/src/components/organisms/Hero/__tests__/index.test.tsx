import hero01 from '@/assets/images/hero/hero01.jpeg';
import { render } from '@testing-library/react';
import { Hero } from '../index';

describe('Hero', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Hero slides={[{ title: '', image: hero01 }]} />
    );
    expect(container).toMatchSnapshot();
  });
});
