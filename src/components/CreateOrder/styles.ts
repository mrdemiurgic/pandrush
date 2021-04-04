import styled from 'styled-components';

import colors from '../../content/colors.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${colors.babyBlue};
  color: ${colors.richBlack};
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.3em;
  padding: 10px 30px;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  box-shadow: 0 0 10px ${colors.richBlack};
  border: 0;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.2s transform;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;
