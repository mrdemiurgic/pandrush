import styled from 'styled-components';
import colors from '../../content/colors.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

export const VideoContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  width: 50%;
  line-height: 0;
`;

interface MediaProps {
  width: number;
  height: number;
}

interface VideoProps extends MediaProps {
  show: boolean;
}

export const Thumbnail = styled.div<MediaProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  /* border: 1px solid yellow; */
  margin: 0;
  border-radius: 5px;
  display: block;
`;

export const YoutubeVideo = styled(Thumbnail)<VideoProps>`
  position: absolute;
  z-index: 2;
  border: 0;
  transition: 0.3s opacity;
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const Overlay = styled(Thumbnail)<MediaProps>`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  top: 10px;
  left: 10px;
  background-color: ${colors.richBlack}88;
  &:hover {
    & > svg {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`;

export const KindText = styled.div`
  position: absolute;
  color: ${colors.babyPowder};
  left: 30px;
  top: 30px;
  font-family: Oswald;
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1;
`;

export const DescriptionText = styled.div`
  font-family: Montserrat;
  position: absolute;
  color: ${colors.babyPowder};
  text-align: center;
  font-weight: 300;
  width: 100%;
  bottom: 30px;
  font-size: 1em;
`;

export const PlayIcon = styled(FontAwesomeIcon)`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  color: ${colors.babyPowder};
  font-size: 3em;
  transition: 0.3s transform;
  transform: translate(-50%, -50%) scale(1);
`;
