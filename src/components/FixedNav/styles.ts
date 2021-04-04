import styled from 'styled-components';
import colors from '../../content/colors.json';
interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 10;
  top: 0;
  background: ${colors.richBlack}66;
  backdrop-filter: blur(10px);
  transform: translateY(${({ show }) => (show ? 0 : -80)}px);
  padding: 10px 0;
  transition: 0.3s transform;
  width: 100%;
`;
