import React from 'react';

import VideoBackground from './index';

export default {
  title: 'Components/VideoBackground',
  component: VideoBackground,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <VideoBackground {...args} />;

export const Default = Template.bind({});
