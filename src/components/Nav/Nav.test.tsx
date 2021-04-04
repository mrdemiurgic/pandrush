import React from 'react';
import navItems from '../../content/nav.json';
import Nav from './index';

import { render, screen } from '@testing-library/react';

test('Nav smokescreen', () => {
  render(<Nav />);

  navItems.map((nav) =>
    expect(screen.getByText(nav.label)).toBeInTheDocument(),
  );
});
