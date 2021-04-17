import React from 'react';
import navItems from '../../content/nav.json';
import Nav from './index';

import { render, screen } from '@testing-library/react';

test('Nav smoke test', () => {
  render(
    <Nav
      textColor="#000000"
      textHoverColor="#222222"
      separatorColor="#000000"
    />,
  );

  navItems.map((nav) =>
    expect(screen.getByText(nav.label)).toBeInTheDocument(),
  );
});
