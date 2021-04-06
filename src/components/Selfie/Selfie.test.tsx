import React from 'react';

import Selfie from './index';

import { render, screen } from '@testing-library/react';

test('Selfie smokescreen test', () => {
  const { container } = render(<Selfie />);

  expect(screen.getByAltText(/pavlo/i)).toBeInTheDocument();
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      border-radius: 400px;
      width: 400px;
      height: 400px;
      overflow: hidden;
    }

    <div>
      <div
        class="c0"
      >
        <img
          alt="Pavlo Andrushchak"
          class=""
          src="test-file-stub"
        />
      </div>
    </div>
  `);
});
