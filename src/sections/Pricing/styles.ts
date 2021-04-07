import styled from 'styled-components';

import colors from '../../content/colors.json';

export const Container = styled.div`
  background: ${colors.sonicSilver};
  color: ${colors.babyPowder};
  height: 400px;
`;

export const InnerContainer = styled.div`
  width: 900px;
  margin: auto;
`;

export const Banner = styled.div`
  font-family: Oswald;
  font-size: 3em;
  padding-top: 20px;
`;
