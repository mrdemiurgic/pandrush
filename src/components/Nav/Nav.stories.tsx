import React from 'react';

import { Meta, Story } from '@storybook/react';

import Nav, { Props } from './index';

export default {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  includeHome: true,
};
