import React from 'react';

import {
  Container,
  InnerContainer,
  Banner,
  WorksContainer,
  WorkContainer,
  SeeMoreContainer,
  SeeMore,
  YoutubeIcon,
} from './styles';

import Examples from '../../components/Examples';
// import Work from '../../components/Work';

import recentWorks from '../../content/recentWorks.json';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const RecentWork = () => {
  return (
    <Container id="work">
      <InnerContainer>
        <WorksContainer>
          <Examples>
            {recentWorks.map(({ kind, youtubeId, description }) => (
              <Examples.Video
                key={youtubeId}
                youtubeId={youtubeId}
                kind={kind}
                description={description}
              />
            ))}
          </Examples>
        </WorksContainer>
        <SeeMoreContainer>
          <SeeMore
            href="https://www.youtube.com/channel/UCNm-CKGs2pgS3_PoUbSCrtQ"
            target="_blank"
          >
            <YoutubeIcon icon={faYoutube} />
            See More
          </SeeMore>
        </SeeMoreContainer>
      </InnerContainer>
    </Container>
  );
};

export default RecentWork;
