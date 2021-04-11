import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// import colors from '../../content/colors.json';

export const Container = styled.div`
  padding: 10px;
`;

interface Props {
  color: string;
}

export const Link = styled.a<Props>`
  text-decoration: none;
  color: ${({ color }) => color};
  display: inline-block;
  margin: auto;
  transition: 0.3s color;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: ${({ color }) => `${color}aa`};
  }
  &:active {
    color: ${({ color }) => color};
  }
`;

export const IconContainer = styled.div``;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 3em;
`;
