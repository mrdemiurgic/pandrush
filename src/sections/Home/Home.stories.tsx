import React from 'react';

import Home from './index';

import { Story } from '@storybook/react';

export default {
  title: 'Sections/Home',
  component: Home,
  decorators: [
    (Story: Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = () => <Home />;

export const Default = Template.bind({});
