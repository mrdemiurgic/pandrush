import styled from 'styled-components';

import colors from '../../content/colors.json';

export const Container = styled.div`
  background: ${colors.richBlack};
  color: ${colors.babyPowder};
  font-family: Montserrat;
`;

export const ContentContainer = styled.div`
  margin-left: 460px;
`;

export const SelfieContainer = styled.div`
  float: left;
  padding: 30px;
`;

export const Name = styled.div`
  font-family: Oswald;
  font-size: 4em;
  padding-top: 30px;
`;

export const Position = styled.div`
  text-transform: uppercase;
  padding-top: 10px;
  font-size: 1.2em;
  font-weight: 200;
`;

export const Slash = styled.span`
  padding: 0 5px;
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
