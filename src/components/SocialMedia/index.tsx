import React from 'react';

import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import socialMedia from '../../content/socialMedia.json';

import { Container, Icon, IconContainer, Link } from './styles';

type IconDeclaration = {
  [key: string]: IconDefinition;
};

const icon: IconDeclaration = {
  youtube: faYoutube,
  email: faEnvelope,
  facebook: faFacebook,
};

const SocialMedia = () => {
  return (
    <Container>
      {socialMedia.map(({ type, url, color }) => (
        <Link href={url} target="_blank" rel="noreferrer" color={color}>
          <IconContainer>
            <Icon icon={icon[type]} />
          </IconContainer>
        </Link>
      ))}
    </Container>
  );
};

export default SocialMedia;
