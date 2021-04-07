import styled from 'styled-components';

import colors from '../../content/colors.json';

export const Container = styled.div`
  background: ${colors.babyPowder};
  width: 100%;
  color: ${colors.richBlack};
`;

export const InnerContainer = styled.div`
  margin: auto;
  width: 900px;
`;

export const Banner = styled.div`
  font-size: 3em;
  font-family: Oswald;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  padding-bottom: 20px;
`;
