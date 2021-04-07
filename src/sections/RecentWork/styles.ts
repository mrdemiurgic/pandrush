import styled from 'styled-components';
import colors from '../../content/colors.json';

export const Container = styled.div`
  background: ${colors.richBlack};
  margin: auto;
`;

export const Banner = styled.div`
  font-family: Oswald;
  font-size: 3em;
  background: red;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 200;
  line-height: 1;
`;

export const WorksContainer = styled.div``;

export const WorkContainer = styled.div`
  width: 50%;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  @media only screen and (min-width: 1850px) {
    width: 33.33333%;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
