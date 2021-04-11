import React from 'react';

import { Meta, Story } from '@storybook/react';

import NumberPicker, { Props } from './index';

export default {
  title: 'Components/NumberPicker',
  component: NumberPicker,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'babyPowder',
    },
  },
} as Meta;

const Template = (args: Props) => <NumberPicker {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  min: 0,
  max: 10,
  initialValue: 5,
};
