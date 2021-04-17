import React from 'react';

import Examples from './index';

import { Meta } from '@storybook/react';

import examples from '../../content/recentWorks.json';

export default {
  title: 'Components/Examples',
  component: Examples,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'sonicSilver',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 900 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template = () => (
  <Examples>
    {examples.map(({ kind, youtubeId, description }) => (
      <Examples.Video
        key={youtubeId}
        kind={kind}
        youtubeId={youtubeId}
        description={description}
      />
    ))}
  </Examples>
);

export const Default = Template.bind({});
