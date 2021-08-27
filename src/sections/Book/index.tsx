import React from 'react';

import {
  Container,
  InnerContainer,
  PackagesContainer,
  QuoteInfo,
  Mileage,
  WhatWillHappen,
  IncludedFeatures,
  IncludedFeaturesBanner,
  Feature,
  FeatureIcon,
  PackageContainer,
} from './styles';

import { Option } from '../../components/Pricing/types';

import offerings from '../../content/offerings.json';

import { faCar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Pricing from '../../components/Pricing';

const { packages, featuresInAll } = offerings;
const Book = () => {
  return (
    <Container id="book">
      <InnerContainer>
        <Pricing>
          {packages.map(
            ({
              name,
              description,
              options,
              features,
              basePrice,
              basePriceLabel,
            }) => (
              <Pricing.Package
                key={name}
                name={name}
                description={description}
                options={options as Option[]}
                features={features}
                basePrice={basePrice}
                basePriceLabel={basePriceLabel}
              />
            ),
          )}
        </Pricing>
        <QuoteInfo>
          <Mileage>
            <FeatureIcon icon={faCar} />
            Mileage will also apply if the project is outside of the DFW
            metroplex (Dallas - Fort Worth, TX).
          </Mileage>
          <WhatWillHappen>
            Given quotes are estimates, subject to adjustments as necessary to
            complete your project. You will be invoiced upon completion of
            project to your satisfaction.
          </WhatWillHappen>
        </QuoteInfo>
        <IncludedFeatures>
          <IncludedFeaturesBanner>
            Included in all packages:
          </IncludedFeaturesBanner>
          <div>
            {featuresInAll.map((feature) => (
              <Feature key={feature}>
                <FeatureIcon icon={faCheckCircle} />
                {feature}
              </Feature>
            ))}
          </div>
        </IncludedFeatures>
      </InnerContainer>
    </Container>
  );
};

export default Book;
