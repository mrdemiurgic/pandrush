import React from 'react';

import { Meta } from '@storybook/react';

import Modal from './index';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'babyBlue',
    },
  },
} as Meta;

const Template = (args) => <Modal {...args}>{args.children || 'heyy'}</Modal>;

export const Default = Template.bind({});
