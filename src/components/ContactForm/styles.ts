import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  position: relative;
`;

interface StatusBoxProps {
  show: boolean;
}

export const StatusBox = styled.div<StatusBoxProps>`
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  transition: 0.6s all;
  transform: translate(-50%, -50%) scale(${({ show }) => (show ? 1 : 0.25)});
  opacity: ${({ show }) => (show ? 1 : 0)};
  background: ${colors.babyBlue2};
  line-height: 1.25;
  font-weight: 600;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px ${colors.richBlack}66;
`;

export const InputContainer = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  display: block;
  font-weight: 500;
  padding: 5px 0;
  font-weight: 600;
  font-size: 0.9em;
`;

export const Input = styled.input`
  display: block;
  border: 1px solid ${colors.babyBlue5};
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.8em;
  width: 100%;
`;

export const TextArea = styled.textarea`
  display: block;
  height: 100px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.babyBlue5};
  border-radius: 5px;
  font-size: 0.8em;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  border: 0;
  outline: none;
  transition: 0.3s background;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.2em;
  background: ${colors.babyBlue};
  border-radius: 5px;
  &:hover {
    background: ${colors.babyBlue4};
  }
  &:active {
    background: ${colors.babyBlue3};
  }
`;

export const SendIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  display: inline-block;
`;
