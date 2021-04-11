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
  NameContainer,
  Position,
  Slash,
  Icon,
  Column,
  CenterContainer,
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
        <CenterContainer>
          <NameContainer>
            <Name>Pavlo Andrushchak</Name>
            <Position>
              <Icon icon={faFilm} />
              Filmmaker
              <Slash />
              Videographer
            </Position>
          </NameContainer>
        </CenterContainer>
        <ContentContainer>
          <Column>
            <Who>{about.who}</Who>
            <Who>{about.what}</Who>
          </Column>
          <Column>
            <HowBanner>Interested? Let's get started!</HowBanner>
            <How>{about.how}</How>
          </Column>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default About;
