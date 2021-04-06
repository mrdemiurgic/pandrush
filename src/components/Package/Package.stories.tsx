import React from 'react';

import Package from './index';

export default {
  title: 'Components/Package',
  component: Package,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Package {...args} />;

export const Default = Template.bind({});
