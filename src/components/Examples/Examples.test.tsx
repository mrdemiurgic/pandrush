import React from 'react';

import Examples from './index';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

jest.mock('react-youtube', () => ({
  __esModule: true,
  default: jest.fn(({ videoId, show }) =>
    show ? <div>{`video: ${videoId}`}</div> : null,
  ),
}));

const videos = [
  {
    youtubeId: 'asdlfkjawoei',
    description: 'An apt description',
    kind: 'Musical',
  },
  {
    youtubeId: 'aefef3f3s',
    description: 'Another video',
    kind: 'Event',
  },
];

test('Examples smoke test', () => {
  render(
    <Examples>
      <Examples.Video
        youtubeId={videos[0].youtubeId}
        description={videos[0].description}
        kind={videos[0].kind}
      />
    </Examples>,
  );
  expect(
    screen.queryByText(`video: ${videos[0].youtubeId}`),
  ).not.toBeInTheDocument();
  expect(screen.getByText(videos[0].kind)).toBeInTheDocument();
  expect(screen.getByText(videos[0].description)).toBeInTheDocument();
});

test('Examples - clicking on box causes the video to reveal itself', async () => {
  render(
    <Examples>
      <Examples.Video
        youtubeId={videos[0].youtubeId}
        description={videos[0].description}
        kind={videos[0].kind}
      />
    </Examples>,
  );

  const button = screen.getByRole('button');

  userEvent.click(button);

  await waitFor(() => {
    expect(
      screen.queryByText(`video: ${videos[0].youtubeId}`),
    ).toBeInTheDocument();
  });
});

test('Examples - clicking on different video boxes causes visibility to alternate among them', async () => {
  render(
    <Examples>
      <Examples.Video
        youtubeId={videos[0].youtubeId}
        description={videos[0].description}
        kind={videos[0].kind}
      />
      <Examples.Video
        youtubeId={videos[1].youtubeId}
        description={videos[1].description}
        kind={videos[1].kind}
      />
    </Examples>,
  );

  const firstBox = screen.getByRole('button', {
    name: new RegExp(videos[0].description, 'i'),
  });

  const secondBox = screen.getByRole('button', {
    name: new RegExp(videos[1].description, 'i'),
  });

  userEvent.click(firstBox);

  await waitFor(() => {
    expect(
      screen.queryByText(`video: ${videos[0].youtubeId}`),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(`video: ${videos[1].youtubeId}`),
    ).not.toBeInTheDocument();
  });

  userEvent.click(secondBox);

  await waitFor(() => {
    expect(
      screen.queryByText(`video: ${videos[0].youtubeId}`),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(`video: ${videos[1].youtubeId}`),
    ).toBeInTheDocument();
  });
});
