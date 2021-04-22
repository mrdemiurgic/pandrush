import React, { useRef, useEffect } from 'react';
import YouTube, { Options } from 'react-youtube';

import {
  VideoContainer,
  VideoInnerContainer,
  YoutubeVideo,
  Thumbnail,
  PlayIcon,
  Overlay,
  KindText,
  DescriptionText,
} from './styles';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { getThumbnailUrl } from '../../utils/youtube';

const youtubeOpts: Options = {
  playerVars: {
    autoplay: 0,
    controls: 1,
    loop: 1,
    showinfo: 0,
  },
};

export interface VideoProps {
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
  /**
   * Currently selected youtube ID
   */
  selectedId?: string;
  /**
   * Handler for making self visible
   */
  select?: React.Dispatch<React.SetStateAction<string>>;
}

const Video = ({
  kind,
  youtubeId,
  description,
  selectedId,
  select = () => {},
}: VideoProps) => {
  const videoRef = useRef<any>();
  const show = youtubeId === selectedId;

  useEffect(() => {
    if (!show && videoRef.current !== undefined) {
      videoRef.current.pauseVideo();
    }
  }, [show]);

  const handler = () => {
    select(youtubeId);
    if (videoRef.current !== undefined) {
      videoRef.current.playVideo();
    }
  };

  const onReady = (e: { target: any }) => {
    videoRef.current = e.target;
  };

  return (
    <VideoContainer
      onClick={handler}
      onKeyPress={handler}
      tabIndex={0}
      role="button"
    >
      <VideoInnerContainer>
        <YoutubeVideo
          as={YouTube}
          opts={youtubeOpts}
          onReady={onReady}
          videoId={youtubeId}
          show={show}
        />
        <Thumbnail as="img" src={getThumbnailUrl(youtubeId)} />
        <Overlay>
          <KindText>{kind}</KindText>
          <PlayIcon icon={faPlay} />
          <DescriptionText>{description}</DescriptionText>
        </Overlay>
      </VideoInnerContainer>
    </VideoContainer>
  );
};

export default Video;
