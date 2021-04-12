import React from 'react';

import CreateOrder from './index';

import { render, screen } from '@testing-library/react';

test('CreateOrder smokescreen test', () => {
  const { container } = render(<CreateOrder />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background: #6CCFF6;
      color: #001011;
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.3em;
      padding: 10px 30px;
      cursor: pointer;
      display: inline-block;
      outline: 0;
      box-shadow: 0 0 10px #001011;
      border: 0;
      -webkit-text-decoration: none;
      text-decoration: none;
      border-radius: 5px;
      -webkit-transition: 0.2s background;
      transition: 0.2s background;
    }

    .c0:hover {
      background: #AFE5FA;
    }

    .c0:active {
      background: #6CCFF6;
    }

    .c1 {
      margin-right: 20px;
    }

    <div>
      <a
        class="c0"
        href="#book"
      >
        <svg
          aria-hidden="true"
          class="svg-inline--fa fa-calendar-alt fa-w-14 c1"
          data-icon="calendar-alt"
          data-prefix="fas"
          focusable="false"
          role="img"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
            fill="currentColor"
          />
        </svg>
        Book Now
      </a>
    </div>
  `);
});
