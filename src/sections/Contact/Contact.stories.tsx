import React from 'react';

import Contact from './index';

import { Story } from '@storybook/react';

export default {
  title: 'Sections/Contact',
  component: Contact,
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
};

const Template = () => <Contact />;

export const Default = Template.bind({});
