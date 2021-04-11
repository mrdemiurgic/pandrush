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
} from './styles';

import { packages, featuresInAll } from '../../content/offerings.json';

import Package, { Option } from '../../components/Package';
import { faCar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <Container id="book">
      <InnerContainer>
        <PackagesContainer>
          {packages.map(({ name, description, options, features, price }) => (
            <Package
              name={name}
              description={description}
              options={options as Option[]}
              features={features}
              price={price}
            />
          ))}
        </PackagesContainer>
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
              <Feature>
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

export default Pricing;
