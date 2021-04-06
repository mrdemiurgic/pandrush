import React from 'react';

import VideoBackground from './index';

import { render, screen } from '@testing-library/react';

test('VideoBackground smokescreen test', () => {
  const { container } = render(<VideoBackground />);

  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      position: absolute;
      width: 100%;
      z-index: 1;
      height: 100%;
      overflow: hidden;
    }

    .c1 {
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
    }

    @media screen and (min-aspect-ratio:16/9) {
      .c1 {
        top: 50%;
        -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
        transform: translate(0,-50%);
        width: 100%;
      }
    }

    @media screen and (max-aspect-ratio:16/9) {
      .c1 {
        left: 50%;
        -webkit-transform: translate(-50%,0);
        -ms-transform: translate(-50%,0);
        transform: translate(-50%,0);
        height: 100%;
      }
    }

    <div>
      <div
        class="c0"
        role="img"
      >
        <video
          autoplay=""
          class="c1"
          loop=""
        >
          <source
            src="test-file-stub"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  `);
});
