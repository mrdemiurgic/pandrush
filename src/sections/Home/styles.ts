import styled from 'styled-components';
import colors from '../../content/colors.json';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const FadeBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: ${colors.richBlack}66;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

const Text = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  color: ${colors.babyPowder};
  line-height: 1;
`;

export const PandrushText = styled(Text)`
  font-size: 5.5em;
  font-weight: 900;
  font-family: 'Oswald';
  margin-bottom: 7px;
`;

export const FilmmakerText = styled(Text)`
  font-size: 1.1em;
  margin-bottom: 30px;
  font-weight: 200;
  text-transform: uppercase;
  font-family: 'Montserrat';
`;

export const FadeBox = styled.div`
  background: #00000044;
  border-radius: 10px;
  padding: 10px;
  /* backdrop-filter: blur(10px); */
`;

export const Slash = styled.span`
  padding: 0 10px;
`;

export const CreateOrderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  text-align: center;
`;
