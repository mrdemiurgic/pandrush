import styled from 'styled-components';
// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import colors from '../../styles/colors';

export const Container = styled.div`
  text-align: center;
`;

interface ItemProps {
  textColor: string;
  textHoverColor: string;
  separatorColor: string;
}

export const Item = styled.a<ItemProps>`
  display: inline-block;
  margin: 0;
  outline: 0;
  font-family: Oswald;
  font-weight: 400;
  text-transform: uppercase;
  border: 0;
  padding: 5px 20px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ textColor }) => textColor};
  text-decoration: none;
  transition: 0.2s color;
  border-right: 1px solid ${({ separatorColor }) => separatorColor};
  text-align: center;
  &:hover {
    color: ${({ textHoverColor }) => textHoverColor};
  }
  &:active {
    color: ${({ textColor }) => textColor};
  }
  &:last-child {
    border-right: 0;
  }
`;
