import React, { useRef, useEffect } from 'react';
import YouTube, { Options } from 'react-youtube';

import {
  VideoContainer,
  YoutubeVideo,
  Thumbnail,
  PlayIcon,
  Overlay,
  KindText,
  DescriptionText,
} from './styles';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { getThumbnailUrl } from '../../utils/youtube';
import { aspectRatio169 } from '../../utils/layout';

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
   * Width of parent element
   */
  width?: number;
  /**
   * Currently selected youtube ID
   */
  selectedId?: string;
  /**
   * Handler for making self visible
   */
  select?: React.Dispatch<React.SetStateAction<string>>;
}

const Video = React.memo(
  ({
    kind,
    youtubeId,
    description,
    width = 0,
    selectedId,
    select = () => {},
  }: VideoProps) => {
    const videoRef = useRef<any>();
    const show = youtubeId === selectedId;

    const thumbnailWidth = width / 2 - 20;
    const thumbnailHeight = aspectRatio169(thumbnailWidth);

    const opts = {
      ...youtubeOpts,
      width: thumbnailWidth.toString(),
      height: thumbnailHeight.toString(),
    };

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
        <YoutubeVideo
          as={YouTube}
          opts={opts}
          onReady={onReady}
          videoId={youtubeId}
          show={show}
          width={thumbnailWidth}
          height={thumbnailHeight}
        />
        <Thumbnail
          as="img"
          src={getThumbnailUrl(youtubeId)}
          width={thumbnailWidth}
          height={thumbnailHeight}
        />
        <Overlay width={thumbnailWidth} height={thumbnailHeight}>
          <KindText>{kind}</KindText>
          <PlayIcon icon={faPlay} />
          <DescriptionText>{description}</DescriptionText>
        </Overlay>
      </VideoContainer>
    );
  },
);

export default Video;
