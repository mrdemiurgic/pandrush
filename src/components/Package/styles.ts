import styled, { keyframes } from 'styled-components';
import colors from '../../content/colors.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const pucker = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.12);
  }
  100% {
    transform: scale(1.07);
  }
`;

export const Container = styled.div`
  /* background: ${colors.sonicSilver}; */
  display: inline-block;
  /* padding: 10px; */
  /* border-radius: 10px; */
  /* border: 1px solid ${colors.richBlack}; */
`;

export const Card = styled.div`
  background: ${colors.sonicSilver};
  color: ${colors.babyPowder};
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  transition: 0.3s all;

  &:hover {
    background: blue;
    animation-name: ${pucker};
    animation-duration: 0.3s;
    animation-iteration-count: infinte;
    animation-fill-mode: forwards;
  }
`;

export const Banner = styled.div`
  font-size: 3em;
  padding: 0;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 10px;
  font-family: 'Oswald';
  color: ${colors.babyPowder};
`;

export const Description = styled.div`
  line-height: 1.333;
`;

export const Separator = styled.div`
  margin: 10px;
  border-bottom: 2px solid ${colors.richBlack}44;
`;

export const StartingPrice = styled.div`
  font-weight: 600;
  font-size: 2.5em;
  line-height: 1;
`;

export const IncludedHours = styled.div`
  font-weight: 200;
  font-size: 0.8em;

  line-height: 1;
`;

export const Check = styled(FontAwesomeIcon)`
  color: ${colors.yellowGreen};
  margin-right: 7.5px;
`;

export const List = styled.div`
  padding: 0px;
  margin: 0px;
  color: ${colors.babyPowder};
`;

export const Item = styled.div`
  margin-bottom: 7.5px;
  font-size: 1em;
  font-weight: 200;
  line-height: 1;
`;

export const ItemContent = styled.span``;

export const OptionBox = styled.div``;

export const OptionTitle;
