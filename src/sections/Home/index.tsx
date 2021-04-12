import React from 'react';
import Nav from '../../components/Nav';
import VideoBackground from '../../components/VideoBackground';
import CreateOrder from '../../components/CreateOrder';
import SocialMedia from '../../components/SocialMedia';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Content,
  PandrushText,
  FilmmakerText,
  FadeBox,
  Slash,
  FadeBackground,
  CreateOrderContainer,
  ScrollingIndicator,
  SocialMediaContainer,
} from './styles';

import colors from '../../content/colors.json';

const Home = () => {
  return (
    <Container id="home">
      <VideoBackground />
      <FadeBackground>
        <Content>
          <PandrushText>Pandrush</PandrushText>
          <FilmmakerText>
            Filmmaker<Slash>/</Slash>Videographer
          </FilmmakerText>
          <FadeBox>
            <Nav
              textColor={colors.babyPowder}
              textHoverColor={colors.babyBlue}
              separatorColor={colors.babyBlue}
            />
          </FadeBox>
          <SocialMediaContainer>
            <SocialMedia />
          </SocialMediaContainer>

          <CreateOrderContainer>
            <CreateOrder />
          </CreateOrderContainer>
        </Content>

        <ScrollingIndicator icon={faArrowDown} />
      </FadeBackground>
    </Container>
  );
};

export default Home;
