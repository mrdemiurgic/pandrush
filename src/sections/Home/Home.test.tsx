import React from 'react';

import Home from './index';

import { render, screen } from '@testing-library/react';

test('Home smokescreen', () => {
  render(<Home />);

  expect(screen.getByText(/pandrush/i)).toBeInTheDocument();
  expect(screen.getByText(/filmmaker/i)).toBeInTheDocument();
});
