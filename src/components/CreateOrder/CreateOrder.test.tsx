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
        href="/order"
      >
        <svg
          aria-hidden="true"
          class="svg-inline--fa fa-video fa-w-18 c1"
          data-icon="video"
          data-prefix="fas"
          focusable="false"
          role="img"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"
            fill="currentColor"
          />
        </svg>
        Create Order
      </a>
    </div>
  `);
});
