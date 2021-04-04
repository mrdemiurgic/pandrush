import React from 'react';
import Nav from '../../components/Nav';
import VideoBackground from '../../components/VideoBackground';
import CreateOrder from '../../components/CreateOrder';
import {
  Container,
  Content,
  PandrushText,
  FilmmakerText,
  FadeBox,
  Slash,
  FadeBackground,
  CreateOrderContainer,
} from './styles';

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
            <Nav />
          </FadeBox>
          <CreateOrderContainer>
            <CreateOrder />
          </CreateOrderContainer>
        </Content>
      </FadeBackground>
    </Container>
  );
};

export default Home;
