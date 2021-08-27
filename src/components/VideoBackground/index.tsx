import React from 'react';
import { Container, Video } from './styles';

import video from '../../assets/cover-desktop.mp4';

const VideoBackground = () => {
  return (
    <Container role="img">
      <Video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Video>
    </Container>
  );
};

export default VideoBackground;
