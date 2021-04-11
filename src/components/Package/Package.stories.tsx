import React from 'react';

import Package, { Props } from './index';

import { Story, Meta } from '@storybook/react';

import offerings from '../../content/offerings.json';

const { name, price, description, features, options } = offerings.packages[0];

export default {
  title: 'Components/Package',
  component: Package,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'sonicSilver',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template = (args: Props) => <Package {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  name,
  price,
  description,
  features,
  options,
};
