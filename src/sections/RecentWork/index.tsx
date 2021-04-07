import React from 'react';

import { Container, Banner, WorksContainer, WorkContainer } from './styles';

import Work from '../../components/Work';

import recentWorks from '../../content/recentWorks.json';

const RecentWork = () => {
  return (
    <Container id="work">
      <WorksContainer>
        {recentWorks.map(({ kind, youtubeId, description }) => (
          <WorkContainer key={youtubeId}>
            <Work youtubeId={youtubeId} kind={kind} description={description} />
          </WorkContainer>
        ))}
      </WorksContainer>
    </Container>
  );
};

export default RecentWork;
