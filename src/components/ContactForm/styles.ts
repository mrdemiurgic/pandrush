import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import colors from '../../content/colors.json';

export const Container = styled.div``;

export const InputContainer = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  display: block;
  font-weight: 500;
  width: 100px;
  vertical-align: top;
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
  padding: 5px 20px;
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
`;
