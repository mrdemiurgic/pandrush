import styled from 'styled-components';

import colors from '../../content/colors.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  background: ${colors.richBlack};
  color: ${colors.babyPowder};
  font-family: Montserrat;
`;

export const InnerContainer = styled.div`
  width: 900px;
  margin: auto;
`;

export const ContentContainer = styled.div`
  /* margin-left: 33.3333%; */
`;

export const SelfieContainer = styled.div`
  float: left;
  width: 33.3333%;
  padding: 20px;
`;

export const Name = styled.div`
  font-family: Oswald;
  font-size: 4em;
  padding-top: 30px;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

export const Position = styled.div`
  text-transform: uppercase;
  padding-top: 10px;
  font-size: 1.2em;
  font-weight: 200;
`;

export const Slash = styled.span`
  padding: 0 5px;
  &::after {
    content: '/';
  }
`;

export const Who = styled.div`
  padding: 20px 30px 0 0;
  line-height: 1.33;
  font-weight: 0.9em;
`;

export const HowBanner = styled.div`
  font-family: Oswald;
  font-size: 2em;
  font-weight: 400;
  padding: 20px 30px 0 0;
`;

export const How = styled.div`
  padding: 20px 30px 30px 0;
  line-height: 1.33;
`;
