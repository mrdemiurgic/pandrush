import React from 'react';

import { Container, Banner, Card } from './styles';

const VideoPackage = () => {
  return (
    <Container>
      <Banner>Standard Package</Banner>
      <Card>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>itemaboo</li>
        </ul>
      </Card>
    </Container>
  );
};

export default VideoPackage;
