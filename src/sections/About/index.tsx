import React from 'react';

import {
  Container,
  InnerContainer,
  ContentContainer,
  Name,
  Who,
  How,
  HowBanner,
  SelfieContainer,
  Position,
  Slash,
  Icon,
} from './styles';
import Selfie from '../../components/Selfie';

import { faFilm } from '@fortawesome/free-solid-svg-icons';

import about from '../../content/about.json';

const About = () => {
  return (
    <Container id="about">
      <InnerContainer>
        <SelfieContainer>
          <Selfie />
        </SelfieContainer>
        <ContentContainer>
          <Name>Pavlo Andrushchak</Name>
          <Position>
            <Icon icon={faFilm} />
            Filmmaker
            <Slash />
            Videographer
          </Position>
          <Who>{about.who}</Who>
          <Who>{about.what}</Who>
          <HowBanner>Interested? Let's get started!</HowBanner>
          <How>{about.how}</How>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default About;
