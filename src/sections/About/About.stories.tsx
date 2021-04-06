import React from 'react';

import About from './index';

import { Story } from '@storybook/react';

export default {
  title: 'Sections/About',
  component: About,
  // decorators: [
  //   (Story: Story) => (
  //     <div style={{ height: '100vh' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};

const Template = () => <About />;

export const Default = Template.bind({});
