import styled from 'styled-components';
import colors from '../../content/colors.json';

export const Container = styled.div`
  position: fixed;
  z-index: 100000000000000;
  top: -80px;
  height: 80px;
  background: ${colors.babyBlue}ee;
  padding: 20px 0;
  width: 100%;
`;

export const CreateOrderContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;
