import styled, { keyframes } from 'styled-components';
import colors from '../../content/colors.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const downwards = keyframes`
from {
  transform: translate(-50%, 0px);
}

to {
  transform: translate(-50%, 30px);
}
`;

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
  line-height: 1;
  font-weight: 900;
  font-family: 'Oswald';
  margin-bottom: 7px;
  @media only screen and (min-width: 1350px) {
    font-size: 7em;
  }
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

export const ScrollingIndicator = styled(FontAwesomeIcon)`
  position: absolute;
  color: ${colors.babyPowder};
  bottom: 50px;
  left: 50%;
  animation-name: ${downwards};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;

  transform: translateX(-50%);
  font-size: 3em;
  z-index: 10;
`;

export const SocialMediaContainer = styled.div`
  /* background: ${colors.richBlack}66; */
  margin: auto;
  text-align: center;
`;
