import React from 'react';
import YouTube from 'react-youtube';
import { Container, Video } from './styles';

import video from '../../assets/cover-desktop.mp4';

const playerVars = {
  autoplay: 1,
  controls: 0,
  rel: 0,
  showinfo: 0,
  mute: 1,
  loop: 1,
  modestbranding: 1,
  iv_load_policy: 3,
  playsinline: 1,
};

const opts = {
  playerVars,
};

const VideoBackground = () => {
  return (
    <Container role="img">
      {/* <YouTube opts={opts} videoId="emKxgUsVnFk" /> */}
      <Video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Video>
    </Container>
  );
};

export default VideoBackground;
