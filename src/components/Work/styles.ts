import styled from 'styled-components';
import colors from '../../content/colors.json';

import YouTube from 'react-youtube';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div``;

export const ThumbnailContainer = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
  outline: none;
  border-radius: 10px;
`;

interface VideoProps {
  show: boolean;
}

export const Video = styled(YouTube)<VideoProps>`
  width: 100%;
  height: 100%;
  z-index: 101;
  position: absolute;
  transition: 0.3s opacity;
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const ThumbnailOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  cursor: pointer;
  background-color: ${colors.richBlack}88;
  &:hover {
    & > svg {
      transform: translate(-50%, -50%) scale(1.3);
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  color: ${colors.babyPowder};
  font-size: 3em;
  transition: 0.3s transform;
  transform: translate(-50%, -50%) scale(1);
`;

export const Thumbnail = styled.img`
  width: 100%;
  display: block;
`;

export const KindText = styled.div`
  position: absolute;
  color: ${colors.babyPowder};
  left: 30px;
  top: 30px;
  font-family: Oswald;
  text-transform: uppercase;
  font-size: 3.5em;
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
  font-weight: 200;
  width: 100%;
  bottom: 30px;
  font-size: 1.4em;
`;
