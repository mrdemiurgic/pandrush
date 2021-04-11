import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { action } from '@storybook/addon-actions';

import colors from '../src/content/colors.json';

import typography from '../src/utils/typography';

export const decorators = [
  (Story) => (
    <>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'richBlack',
    values: [
      {
        name: 'richBlack',
        value: colors.richBlack,
      },
      {
        name: 'sonicSilver',
        value: colors.sonicSilver,
      },
      {
        name: 'babyPowder',
        value: colors.babyPowder,
      },
      {
        name: 'babyBlue',
        value: colors.babyBlue,
      },
    ],
  },
};

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname);
};
