import React from 'react';

import selfie from '../../assets/selfie.jpg';
import { Container, Img } from './styles';

const Selfie = () => {
  return (
    <Container>
      <Img alt="Pavlo Andrushchak" src={selfie} />
    </Container>
  );
};

export default Selfie;
