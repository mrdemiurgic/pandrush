import React from 'react';

import {
  Container,
  Banner,
  Card,
  List,
  Item,
  ItemContent,
  StartingPrice,
} from './styles';

interface Props {
  title: string;
}

const VideoPackage = () => {
  return (
    <Container>
      <Banner>Wedding Package</Banner>
      <Card>
        <StartingPrice>Starting at $1100</StartingPrice>
        <List>
          <Item>
            <ItemContent>4 hours of filming</ItemContent>
          </Item>
          <Item>
            <ItemContent>One Videographer</ItemContent>
          </Item>
          <Item>
            <ItemContent>4k footage</ItemContent>
          </Item>
        </List>
      </Card>
    </Container>
  );
};

export default VideoPackage;
