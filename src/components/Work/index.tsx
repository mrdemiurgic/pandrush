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
  LoaderContainer,
} from './styles';

import { Options } from 'react-youtube';
import { getThumbnailUrl } from '../../utils/youtube';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import ClipLoader from 'react-spinners/ClipLoader';

import colors from '../../content/colors.json';

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
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const onClick = () => {
    setMountVideo(true);
    setShowLoader(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    setShowLoader(false);
    setShowVideo(false);

    setTimeout(() => {
      setMountVideo(false);
    }, 300);
  };

  const onPlay = (e: { target: any }) => {
    setShowVideo(true);
  };

  return (
    <Container>
      <ThumbnailContainer
        role="button"
        key={youtubeId}
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
            onPlay={onPlay}
          />
        )}
        <ThumbnailOverlay>
          <KindText role="banner">{kind}</KindText>
          <DescriptionText>{description}</DescriptionText>
          {showLoader ? (
            <LoaderContainer>
              <ClipLoader color={colors.babyPowder} size={100} />
            </LoaderContainer>
          ) : (
            <Icon icon={faPlay} />
          )}
        </ThumbnailOverlay>
        <Thumbnail alt="thumbnail" src={getThumbnailUrl(youtubeId)} />
      </ThumbnailContainer>
    </Container>
  );
};

export default Work;
