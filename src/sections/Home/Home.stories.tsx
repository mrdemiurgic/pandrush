import React from 'react';

import Home from './index';

export default {
  title: 'Sections/Home',
  component: Home,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
