import React from 'react';

import {
  faEnvelope,
  faExternalLinkAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import {
  Container,
  Icon,
  IconContainer,
  Text,
  Link,
  ExternalIcon,
} from './styles';

type SocialType = 'facebook' | 'youtube' | 'email';

type IconDeclaration = {
  [key: string]: IconDefinition;
};

const icon: IconDeclaration = {
  youtube: faYoutube,
  email: faEnvelope,
  facebook: faFacebook,
};

interface Props {
  /**
   * Type of social media in shorthand form (example: facebook)
   */
  type: string;
  /**
   * URL of social media
   */
  url: string;
  /**
   * One line description of this social media
   */
  text: string;
  /**
   * Color of icon
   */
  color: string;
}

const Social = ({ type, url, text, color }: Props) => {
  return (
    <Container>
      <Link href={url} target="_blank" rel="noreferrer">
        <IconContainer>
          <Icon icon={icon[type]} color={color} />
        </IconContainer>
        <Text>{text}</Text>
        <ExternalIcon icon={faExternalLinkAlt} />
      </Link>
    </Container>
  );
};

export default Social;
