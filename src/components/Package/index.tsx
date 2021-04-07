import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import {
  Container,
  Banner,
  Card,
  Check,
  List,
  Item,
  ItemContent,
  StartingPrice,
  IncludedHours,
  Description,
  Separator,
} from './styles';

interface Props {
  title: string;
}

const VideoPackage = () => {
  return (
    <Container>
      <Card>
        <Banner>Wedding</Banner>
        <StartingPrice>$2500</StartingPrice>
        <Description>
          We will capture your special day with all of the emotions and memories
          intact for your future self!
        </Description>
        <Separator />
        <List>
          <Item>
            <Check icon={faCheck} />
            <ItemContent>4 hours of filming</ItemContent>
          </Item>

          <Item>
            <Check icon={faCheck} />
            <ItemContent>2 videographers</ItemContent>
          </Item>
          <Item>
            <Check icon={faCheck} />
            <ItemContent>
              5-10 minutes of professionally edited film
            </ItemContent>
          </Item>
        </List>
      </Card>
    </Container>
  );
};

export default VideoPackage;
