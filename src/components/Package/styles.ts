import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  background: red;
`;

export const Banner = styled.div`
  font-size: 2em;
  color: black;
`;

const pucker = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.07);
  }
`;

const expand = keyframes`

0% {
  transform: scale(1);
}
50% {

}
100% {
  transform: scale(1.2);
}
`;

export const Card = styled.div`
  height: 200px;
  width: 100px;
  background: pink;
  transition: 0.3s all;

  &:hover {
    background: blue;
    animation-name: ${pucker};
    animation-duration: 0.3s;
    animation-iteration-count: infinte;
    animation-fill-mode: forwards;
  }

  &:active {
    transform: scale(1.5);
  }
`;
