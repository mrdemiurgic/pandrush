import React from 'react';

import { Meta } from '@storybook/react';

import Pricing from './index';
import { Props } from './Package';

import offerings from '../../content/offerings.json';

export default {
  title: 'Components/Pricing',
  component: Pricing,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'sonicSilver',
    },
  },
} as Meta;

const Template = () => (
  <Pricing>
    {offerings.packages.map(
      ({ name, description, basePrice, basePriceLabel, features, options }) => (
        <Pricing.Package
          name={name}
          description={description}
          basePrice={basePrice}
          basePriceLabel={basePriceLabel}
          features={features}
          options={options}
        />
      ),
    )}
  </Pricing>
);

export const Default = Template.bind({});
