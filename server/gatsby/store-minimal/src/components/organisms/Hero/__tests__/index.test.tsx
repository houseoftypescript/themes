import { render } from '@testing-library/react';
import React from 'react';
import { Hero } from '../index';

describe('Hero', () => {
  it('to match snapshot', () => {
    const { container } = render(<Hero slides={[{ title: '', image: '' }]} />);
    expect(container).toMatchSnapshot();
  });
});
