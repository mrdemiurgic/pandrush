import React from 'react';

import Work, { Props } from './index';

import { Story } from '@storybook/react';

export default {
  title: 'Components/Work',
  component: Work,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: Story) => (
      <div
        style={{
          width: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args: Props) => <Work {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  youtubeId: '4mkeIhQCmj8',
  kind: 'Musical',
  description: 'ASL Christmas Fellowship in Houston TX.',
};
