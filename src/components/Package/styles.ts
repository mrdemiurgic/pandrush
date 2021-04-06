import styled, { keyframes } from 'styled-components';
import colors from '../../content/colors.json';

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

export const Banner = styled.div`
  font-size: 2em;
  padding: 0;
  line-height: 1;
  margin-bottom: 20px;
  font-family: 'Oswald';
  color: ${colors.babyPowder};
`;

export const Card = styled.div`
  background: ${colors.sonicSilver};
  color: ${colors.babyPowder};
  border-radius: 10px;
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

export const StartingPrice = styled.div`
  font-style: italic;
  font-weight: 500;
  font-size: 0.8em;
  line-height: 1;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  padding: 0px;
  margin: 0px;
  color: ${colors.babyPowder};
  list-style-position: inside;
`;

export const Item = styled.li`
  margin-bottom: 5px;
  font-size: 0.9em;
  font-weight: 200;
  line-height: 1;
`;

export const ItemContent = styled.span`
  margin-left: -12px;
`;
