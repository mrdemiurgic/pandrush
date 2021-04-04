import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import colors from '../../content/colors.json';

export const Container = styled.div`
  text-align: center;
`;

export const Item = styled(AnchorLink)`
  display: inline-block;
  margin: 0;
  outline: 0;
  font-family: Oswald;
  font-weight: 300;
  text-transform: uppercase;
  border: 0;
  padding: 5px 20px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${colors.babyPowder};
  text-decoration: none;
  transition: 0.2s color;
  border-right: 1px solid ${colors.babyBlue};
  text-align: center;
  &:hover {
    color: ${colors.babyBlue};
  }
  &:active {
    color: ${colors.babyPowder};
  }
  &:last-child {
    border-right: 0;
  }
`;
