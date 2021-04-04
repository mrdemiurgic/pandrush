import React from 'react';

import CreateOrder from './index';

export default {
  title: 'Components/CreateOrder',
  component: CreateOrder,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <CreateOrder {...args} />;

export const Default = Template.bind({});
