import styled, { keyframes } from 'styled-components';
import colors from '../../content/colors.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface OptionBoxProps {
  selected?: boolean;
  type?: 'once' | 'hourly';
}

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: inline-block;
  text-align: left;
  width: 33.33%;
  padding: 10px;
`;

export const Card = styled.div`
  background: ${colors.babyPowder};
  color: ${colors.richBlack};
  border-radius: 10px;
  /* width: 300px; */
  padding: 10px;
  transition: 0.3s all;
  box-shadow: 0 2.5px 5px ${colors.richBlack};
`;

export const Banner = styled.div`
  font-size: 1.8em;
  padding: 0;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 10px;
  font-family: 'Oswald';
`;

export const Description = styled.div`
  line-height: 1.2;
  font-weight: 0.8em;
`;

export const Separator = styled.div`
  margin: 10px 0;
  border-bottom: 2px solid ${colors.richBlack}44;
`;

export const BaseCost = styled.span`
  font-size: 0.3em;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  color: ${colors.sonicSilver1};
  margin-right: 2.5px;
`;

export const StartingPrice = styled.div`
  font-weight: 600;
  font-size: 1.4em;
  color: ${colors.babyBlue5};
  text-align: right;
  margin: 10px 0;
  line-height: 1;
`;

export const IncludedHours = styled.div`
  font-weight: 200;
  font-size: 0.8em;

  line-height: 1;
`;

export const Check = styled(FontAwesomeIcon)`
  color: ${colors.yellowGreen3};
  float: left;
`;

export const FeatureList = styled.div`
  padding: 0px;
  margin-top: 10px;
`;

export const FeatureItem = styled.div`
  margin-bottom: 7.5px;
  font-size: 0.8em;
  font-weight: 300;
  line-height: 1;
`;

export const FeatureContent = styled.div`
  margin-left: 25px;
`;

export const NumberPickerContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

export const OptionBox = styled.div<OptionBoxProps>`
  border: ${({ type }) => (type === 'hourly' ? 0 : 1)}px solid
    ${({ selected }) =>
      selected ? colors.babyBlue5 : `${colors.sonicSilver1}dd`};
  margin-bottom: 5px;
  padding: 10px;
  user-select: none;
  position: relative;
  outline: none;
  background: ${({ selected }) =>
    selected ? colors.babyBlue2 + 'dd' : 'none'};
  border-radius: 5px;
  cursor: ${({ type }) => (type === 'hourly' ? 'inherit' : 'pointer')};
  transition: 0.3s transform, 0.3s background;
  &:hover {
    background: ${({ type, selected }) =>
      type === 'hourly'
        ? 'none'
        : `${colors.babyBlue2}${selected ? 'dd' : '66'}`};
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const OptionIcon = styled(FontAwesomeIcon)`
  color: ${colors.babyBlue5};
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const OptionContent = styled.div`
  margin-left: 25px;
`;

export const OptionName = styled.div<OptionBoxProps>`
  font-size: 0.9em;
  font-weight: 500;
  position: absolute;
  left: ${({ type }) => (type === 'hourly' ? 90 : 40)}px;
  top: 50%;
  transform: translateY(-50%);
`;

export const OptionPrice = styled.div`
  text-align: right;
  font-size: 1em;
  font-weight: 600;
  color: ${colors.babyBlue5};
`;

export const TotalBox = styled.div`
  margin-top: 20px;
`;

export const TotalText = styled.div`
  float: left;
  font-size: 1.5em;
  padding: 3px 0;
`;

export const TotalPrice = styled.div`
  text-align: right;
  width: 100%;
  font-weight: 600;
  font-size: 1.8em;
  transform-origin: right center;
  animation-name: ${pulse};
  animation-duration: 0.25s;

  color: ${colors.babyBlue5};
`;

export const SelectContainer = styled.div`
  margin-top: 10px;
`;

export const SelectButton = styled.button`
  width: 100%;
  background: ${colors.babyBlue};
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 0;
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s background;

  &:hover {
    background: ${colors.babyBlue4};
  }
  &:active {
    background: ${colors.babyBlue3};
  }
`;

export const CalendarIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
