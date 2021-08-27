import React from 'react';

import { Meta } from '@storybook/react';

import FixedNav from './index';

export default {
  title: 'Components/FixedNav',
  component: FixedNav,
} as Meta;

const Template = (args) => <FixedNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: true,
};
