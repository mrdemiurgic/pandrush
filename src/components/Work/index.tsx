import React, { useState, useRef } from 'react';

import {
  Container,
  KindText,
  Thumbnail,
  ThumbnailContainer,
  DescriptionText,
  ThumbnailOverlay,
  Icon,
  Video,
} from './styles';

import { Options } from 'react-youtube';
import { getThumbnailUrl } from '../../utils/youtube';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export interface Props {
  /**
   * Kind of project (Musical, Event, Wedding, etc)
   */
  kind: string;
  /**
   * Youtube embed ID
   */
  youtubeId: string;
  /**
   * Description of what this project is about
   */
  description: string;
}

const youtubeOpts: Options = {
  playerVars: {
    autoplay: 1,
    controls: 0,
    loop: 1,
    showinfo: 1,
  },
};

const Work = ({ kind, youtubeId, description }: Props) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [mountVideo, setMountVideo] = useState<boolean>(false);

  const playerTarget = useRef<any>();

  const onClick = () => {
    setMountVideo(true);
    if (playerTarget.current !== undefined) {
      setShowVideo(true);
      playerTarget.current.playVideo();
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setShowVideo(false);
    if (playerTarget.current !== undefined) {
      playerTarget.current.pauseVideo();
    }

    setTimeout(() => {
      setMountVideo(false);
    }, 300);
  };

  const onReady = (e: { target: any }) => {
    setShowVideo(true);
    playerTarget.current = e.target;
  };

  return (
    <ThumbnailContainer
      role="button"
      tabIndex={0}
      onKeyPress={onClick}
      onClick={onClick}
      onBlur={onBlur}
    >
      {mountVideo && (
        <Video
          opts={youtubeOpts}
          videoId={youtubeId}
          show={showVideo}
          onReady={onReady}
        />
      )}
      <ThumbnailOverlay>
        <KindText role="banner">{kind}</KindText>
        <DescriptionText>{description}</DescriptionText>
        <Icon icon={faPlay} />
      </ThumbnailOverlay>
      <Thumbnail alt="thumbnail" src={getThumbnailUrl(youtubeId)} />
    </ThumbnailContainer>
  );
};

export default Work;
