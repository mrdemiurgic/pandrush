import React from 'react';

import FixedNav from './index';

import { render } from '@testing-library/react';

test('FixedNav is visible on show', () => {
  const { container } = render(<FixedNav show={true} />);

  expect(container).toBeVisible();
});

test('FixedNav is hidden on show=false', () => {
  const { container } = render(<FixedNav show={false} />);

  expect(container).not.toBeVisible();
});
