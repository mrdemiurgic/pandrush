import React from 'react';

import Selfie from './index';

import { render, screen } from '@testing-library/react';

test('Selfie smokescreen test', () => {
  const { container } = render(<Selfie />);

  expect(screen.getByAltText(/pavlo/i)).toBeInTheDocument();
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      width: 100%;
      height: 100%;
    }

    .c1 {
      border-radius: 100%;
    }

    <div>
      <div
        class="c0"
      >
        <img
          alt="Pavlo Andrushchak"
          class="c1"
          src="test-file-stub"
        />
      </div>
    </div>
  `);
});
