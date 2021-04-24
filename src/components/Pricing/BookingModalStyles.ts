import styled from 'styled-components';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Banner = styled.div`
  margin: ${spacing.xs}px;
  font-size: 0.8em;
  font-weight: 600;
`;

export const SelectedPackage = styled.div`
  background: ${colors.babyBlue1};
  border: 1px solid ${colors.sonicSilver1};
  margin: ${spacing.xs}px;
  display: flex;
  padding: ${spacing.xs}px;
  border-radius: ${spacing.xs}px;
`;

export const PackageName = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  font-family: Oswald;
  flex: 2;
  text-transform: uppercase;
`;

export const TotalPrice = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  flex: 1;
  text-align: right;
  text-transform: uppercase;
  font-family: Oswald;
`;

export const Button = styled.button`
  flex: 1;
  padding: ${spacing.sm}px 0;
  border-radius: ${spacing.xs}px;
  font-weight: 600;
  background: ${colors.babyBlue3};
  cursor: pointer;
  outline: none;
  border: 0;
  color: ${colors.richBlack};
  margin: ${spacing.xs}px;
  transition: 0.3s background;
  &:hover {
    background: ${colors.babyBlue4};
  }
  &:active {
    background: ${colors.babyBlue3};
  }
`;

export const CancelButton = styled(Button)`
  background: none;
  border: 1px solid ${colors.babyBlue5};
  color: ${colors.babyBlue5};
  transition: 0.3s color, 0.3s border;
  &:hover {
    background: none;
    border: 1px solid ${colors.babyBlue4};
    color: ${colors.babyBlue4};
  }
  &:active {
    background: none;
    border: 1px solid ${colors.babyBlue5};
    color: ${colors.babyBlue5};
  }
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
  margin-right: ${spacing.sm}px;
  display: inline-block;
`;

export const ButtonBar = styled.div`
  display: flex;
`;

export const Message = styled.div`
  margin: 0 ${spacing.xs}px ${spacing.sm}px ${spacing.xs}px;
`;
