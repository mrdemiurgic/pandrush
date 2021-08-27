import React from 'react';

import Tidbits from './index';

import { Meta } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faPlane } from '@fortawesome/free-solid-svg-icons';

import TexasIcon from '../TexasIcon';

// import texas from '../../assets/texas.svg';

const testData = [
  {
    text: 'based in Dallas - Fort Worth, Texas',
    subtext: 'Born and raised in Ukraine!',
    icon: <TexasIcon />,
  },
  {
    text: 'flexible with time and location',
    subtext: "Hawaii, 2am in the morning? I'll be there!",
    icon: <FontAwesomeIcon icon={faPlane} />,
  },
  {
    text: 'skilled in various video genres',
    subtext: 'Weddings, trade shows, documentaries, movies, you name it!',
    icon: <FontAwesomeIcon icon={faImages} />,
  },
];

export default {
  title: 'Components/Tidbits',
  component: Tidbits,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'richBlack',
    },
  },
} as Meta;

const Template = () => (
  <Tidbits>
    {testData.map(({ text, subtext, icon }) => (
      <Tidbits.Bit text={text} subtext={subtext} icon={icon} />
    ))}
  </Tidbits>
);

export const Default = Template.bind({});
