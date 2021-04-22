import React from 'react';

import Book from './index';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Sections/Book',
  component: Book,
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

const Template = () => <Book />;

export const Default = Template.bind({});
