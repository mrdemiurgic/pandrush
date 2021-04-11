import React from 'react';

import Pricing from './index';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Sections/Pricing',
  component: Pricing,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },

  // decorators: [
  //   (Story: Story) => (
  //     <div style={{ height: '100vh' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} as Meta;

const Template = () => <Pricing />;

export const Default = Template.bind({});
