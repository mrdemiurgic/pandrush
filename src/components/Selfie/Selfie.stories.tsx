import React from 'react';

import Selfie from './index';

export default {
  title: 'Components/Selfie',
  component: Selfie,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Selfie {...args} />;

export const Default = Template.bind({});
