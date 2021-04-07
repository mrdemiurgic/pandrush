import React from 'react';

import Social from './index';

const sum = (b: string, c: number) => b + c;

export default {
  title: 'Components/Social',
  component: Social,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <Social {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'facebook',
  url: 'https://www.facebook.com/Pandrush/',
  text: 'Connect with me on Facebook!',
};
