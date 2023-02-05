import { render } from '@testing-library/react';
import { Project } from '../index';

describe('Project', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Project
        index={1}
        title="title"
        subtitle="subtitle"
        description="description"
      />
    );
    expect(container).toMatchSnapshot();
  });
});
