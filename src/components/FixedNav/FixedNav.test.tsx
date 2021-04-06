import React from 'react';

import FixedNav from './index';

import { render } from '@testing-library/react';

test('FixedNav is visible on show', () => {
  const { container } = render(<FixedNav />);

  expect(container).toBeVisible();
});
