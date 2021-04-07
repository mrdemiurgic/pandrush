import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import colors from '../../content/colors.json';

export const Container = styled.div`
  margin: auto;
  padding-bottom: 10px;
  /* text-align: center; */
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.richBlack};
  height: 60px;
  display: block;
  margin: auto;
  transition: 0.3s color;
  &:hover {
    color: ${colors.sonicSilver};
  }
  &:active {
    color: ${colors.richBlack};
  }
`;

export const IconContainer = styled.div`
  display: inline-block;
  width: 90px;
  height: 60px;
  text-align: center;
  vertical-align: top;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 3em;
`;

export const Text = styled.span`
  font-size: 1.1em;
  display: inline-block;
  font-weight: 500;
  line-height: 60px;
`;

export const ExternalIcon = styled(FontAwesomeIcon)`
  height: 60px;
  margin-left: 5px;
  vertical-align: top;
`;
