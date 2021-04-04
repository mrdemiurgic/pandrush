import React from 'react';
import Nav from '../Nav';

import { Container } from './styles';

interface Props {
  /**
   * Whether if the Fixed Nav component should be visible on top of viewport. It will be moved out of viewport when set to false.
   */
  show: boolean;
}

const FixedNav = ({ show }: Props) => {
  return (
    <Container show={show}>
      <Nav includeHome={true} />
    </Container>
  );
};

export default FixedNav;
