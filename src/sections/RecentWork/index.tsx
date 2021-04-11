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

import Work from '../../components/Work';

import recentWorks from '../../content/recentWorks.json';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const RecentWork = () => {
  return (
    <Container id="work">
      <InnerContainer>
        <WorksContainer>
          {recentWorks.map(({ kind, youtubeId, description }) => (
            <WorkContainer key={youtubeId}>
              <Work
                youtubeId={youtubeId}
                kind={kind}
                description={description}
              />
            </WorkContainer>
          ))}
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
