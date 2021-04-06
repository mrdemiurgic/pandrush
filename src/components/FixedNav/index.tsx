import React from 'react';
import Nav from '../Nav';
import CreateOrder from '../CreateOrder';

import { Container, CreateOrderContainer } from './styles';

interface Props {
  navRef?: React.RefObject<HTMLDivElement> | null;
}

const FixedNav = ({ navRef = null }: Props) => {
  return (
    <Container ref={navRef}>
      <Nav includeHome={true} />
      <CreateOrderContainer>
        <CreateOrder />
      </CreateOrderContainer>
    </Container>
  );
};

export default FixedNav;
