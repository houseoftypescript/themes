import { render } from '@testing-library/react';
import React from 'react';
import { DesktopMenu } from '../index';

describe('DesktopMenu', () => {
  it('to match snapshot', () => {
    const { container } = render(<DesktopMenu scrolled />);
    expect(container).toMatchSnapshot();
  });
});
