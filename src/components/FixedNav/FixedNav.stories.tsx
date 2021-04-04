import React from 'react';

import FixedNav from './index';

export default {
  title: 'Components/FixedNav',
  component: FixedNav,
};

const Template = (args) => <FixedNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: true,
};
