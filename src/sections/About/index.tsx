import React from 'react';

import {
  Container,
  ContentContainer,
  Name,
  Who,
  How,
  HowBanner,
  SelfieContainer,
  Position,
  Slash,
} from './styles';
import Selfie from '../../components/Selfie';

import about from '../../content/about.json';

const About = () => {
  return (
    <Container id="about">
      <SelfieContainer>
        <Selfie />
      </SelfieContainer>
      <ContentContainer>
        <Name>Pavlo Andrushchak</Name>
        <Position>
          Filmmaker<Slash>/</Slash>Videographer
        </Position>
        <Who>{about.who}</Who>
        <Who>{about.what}</Who>
        <HowBanner>Interested? Let's get started!</HowBanner>
        <How>{about.how}</How>
      </ContentContainer>
    </Container>
  );
};

export default About;
