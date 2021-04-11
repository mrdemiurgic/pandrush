import React from 'react';
import Nav from '../Nav';
import CreateOrder from '../CreateOrder';

import colors from '../../content/colors.json';

import { Container, CreateOrderContainer } from './styles';

interface Props {
  navRef?: React.RefObject<HTMLDivElement> | null;
}

const FixedNav = ({ navRef = null }: Props) => {
  return (
    <Container ref={navRef}>
      <Nav
        includeHome={true}
        textColor={colors.richBlack}
        separatorColor={colors.babyPowder}
        textHoverColor={colors.babyPowder}
      />
      {/* <CreateOrderContainer>
        <CreateOrder />
      </CreateOrderContainer> */}
    </Container>
  );
};

export default FixedNav;
