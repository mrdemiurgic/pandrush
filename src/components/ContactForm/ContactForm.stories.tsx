import React from 'react';
import { Meta } from '@storybook/react';
import ContactForm from './index';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'babyPowder',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 500 }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template = (args: any) => <ContactForm {...args} />;

export const Default = Template.bind({});
