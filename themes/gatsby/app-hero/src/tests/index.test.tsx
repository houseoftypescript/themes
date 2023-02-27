import { render } from '@testing-library/react';
import IndexPage from '../pages';
import React from 'react';
import { PageProps } from 'gatsby';

describe('IndexPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<IndexPage {...({} as PageProps)} />);
    expect(container).toMatchSnapshot();
  });
});
