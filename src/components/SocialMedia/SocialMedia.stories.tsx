import React from 'react';

import { Meta } from '@storybook/react';

import SocialMedia from './index';

export default {
  title: 'Components/SocialMedia',
  component: SocialMedia,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template = (args) => <SocialMedia {...args} />;

export const Default = Template.bind({});
