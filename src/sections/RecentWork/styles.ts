import styled from 'styled-components';
import colors from '../../content/colors.json';

export const Container = styled.div`
  background: ${colors.babyBlue};
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
  background: pink;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
`;
