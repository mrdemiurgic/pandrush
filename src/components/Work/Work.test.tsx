import React from 'react';

import Work from './index';

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

jest.mock('react-youtube', () => {
  return {
    __esModule: true,
    default: () => {
      return <div>I am a fucking video</div>;
    },
  };
});

test('Work smokescreen test', () => {
  render(
    <Work
      kind="Musical"
      youtubeId="4mkeIhQCmj8"
      description="blah blah blah blah"
    />,
  );

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('banner')).toHaveTextContent('Musical');
  expect(screen.getByText(/blah blah blah blah/i)).toBeInTheDocument();
});

test('Work click event shows youtube video', async () => {
  render(
    <Work
      kind="Musical"
      youtubeId="4mkeIhQCmj8"
      description="blah blah blah blah"
    />,
  );

  const thumbnail = screen.getByRole('button');
  user.click(thumbnail);
  expect(await screen.findByText(/i am a fucking video/i)).toBeInTheDocument();
});
